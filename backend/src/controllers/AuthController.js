const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const { uploadImage } = require("../services/cloudinary");

const { CRYPT_ROUNDS, CRYPT_SECRET } = process.env;

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;

    user.password = bcrypt.hashSync(user.password, parseInt(CRYPT_ROUNDS, 10));

    const feedbackImg = await uploadImage(req.file.path);
    user.avatar = feedbackImg.secure_url;

    models.users
      .insert(user)
      .then(([sqlRes]) => {
        user.id = sqlRes.insertId;
        delete user.password;
        const token = jwt.sign(user, CRYPT_SECRET);
        res.status(201).json({ user, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, CRYPT_SECRET);
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
