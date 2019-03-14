const router = require("express").Router();
const customerController = require("../../controllers/customers");

// Matches with "/api/books"
router.route("/")
  .get(customerController.findAll)
  .post(customerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(customerController.findById)
  .put(customerController.update)
  .delete(customerController.remove);

module.exports = router;