var router = require("express").Router();
var custHistoryController = require("../../controllers/custHistory");

router.get("/:id", custHistoryController.find);
router.post("/", custHistoryController.create);
router.delete("/:id", custHistoryController.delete);

module.exports = router;
