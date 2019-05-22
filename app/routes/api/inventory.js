const router = require("express").Router();
const inventoryController = require("../../controllers/inventory");
console.log("get post router");
// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)
  // .post(inventoryController.create);
  .post(inventoryController.create)

// Matches with "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findById)
  .put(inventoryController.update)
  .delete(inventoryController.remove);

module.exports = router;