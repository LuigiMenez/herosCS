const express = require("express");
const passport = require("passport");
require("./passportStrategies");

const {
  ItemController,
  JdrController,
  CharactersController,
  AuthController,
} = require("./controllers");

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

router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local"),
  AuthController.login
);

// router.use(passport.authenticate("jwt"));

module.exports = router;
