var router = require("express").Router();
var custHistoryController = require("../../controllers/custHistory");

router.get("/", custHistoryController.findAll)
router.get("/:id", custHistoryController.findById);
router.post("/", custHistoryController.create);
router.delete("/:id", custHistoryController.remove);

module.exports = router;
