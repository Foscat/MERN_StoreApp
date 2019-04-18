var router = require("express").Router();
var genHistoryController = require("../../controllers/genHistory");

router.get("/:id", genHistoryController.find);
router.post("/", genHistoryController.create);
router.delete("/:id", genHistoryController.delete);

module.exports = router;