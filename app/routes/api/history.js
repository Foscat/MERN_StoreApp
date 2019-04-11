var router = require("express").Router();
var historyController = require("../../controllers/history");

router.get("/:id", historyController.find);
router.post("/", historyController.create);
router.delete("/:id", historyController.delete);

module.exports = router;
