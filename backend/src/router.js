const express = require("express");
const passport = require("passport");
const multer = require("multer");

const {
  ItemController,
  JdrController,
  CharactersController,
  AuthController,
} = require("./controllers");

const upload = multer({ dest: "tmp/" });

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/jdr", JdrController.browse);
router.get("/jdr/:id", JdrController.read);
router.put("/jdr/:id", JdrController.edit);
router.post("/jdr", JdrController.add);
router.delete("/jdr/:id", JdrController.delete);

router.get("/Characters", CharactersController.browse);
router.get("/Characters/:id", CharactersController.read);

router.post("/auth/signup", upload.single("avatar"), AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

// router.use(passport.authenticate("jwt"));

module.exports = router;
