const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");

const { JWT_ROUNDS, JWT_SECRET } = process.env;

class AuthController {
  static signup = (req, res) => {
    const formData = req.body;
    formData.password = bcrypt.hashSync(formData.password, Number(JWT_ROUNDS));
    models.users
      .insert(formData)
      .then(([sqlRes]) => {
        delete formData.password;
        formData.id = sqlRes.insertId;
        const token = jwt.sign(formData, JWT_SECRET);
        res.status(201).json({ user: formData, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, JWT_SECRET);
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
