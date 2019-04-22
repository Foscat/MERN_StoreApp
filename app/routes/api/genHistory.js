var router = require("express").Router();
var genHistoryController = require("../../controllers/genHistory");

router.get("/", genHistoryController.findAll)
router.get("/:id", genHistoryController.findById);
router.post("/", genHistoryController.create);
router.delete("/:id", genHistoryController.remove);

module.exports = router;