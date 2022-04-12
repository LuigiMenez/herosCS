const express = require("express");

const { ItemController, JdrController } = require("./controllers");

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

module.exports = router;
