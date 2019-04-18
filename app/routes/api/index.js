const path = require("path");
const router = require("express").Router();
const customerRoutes = require("./customers");
const inventoryRoutes = require("./inventory");
const custHistoryRoutes = require("./custHistory");
const genHistoryRoutes = require("./genHistory");

// Customer routes
router.use("/customers", customerRoutes);

// Customer Purchase history routes
router.use("/custHistory", custHistoryRoutes)

// General purchase history routes
router.use("/genHistory", genHistoryRoutes);
// Inventory Routes
router.use("/inventory", inventoryRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
