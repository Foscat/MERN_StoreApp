const path = require("path");
const router = require("express").Router();
const customerRoutes = require("./customers");
const inventoryRoutes = require("./inventory");

// Book routes
router.use("/customers", customerRoutes);

// Google Routes
router.use("/inventory", inventoryRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
