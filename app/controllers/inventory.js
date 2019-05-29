const db = require("../models");
console.log("controllers");

// Defining methods for the bookController
module.exports = {
  // Get all products from db
  findAll: function(req, res) {
    db.Inventory.find(req.query)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  // Find single product in db
  findById: function(req, res) {
    db.Inventory.findById(req.params.id)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  // Post a new product to db
  create: function(req, res) {
    console.log("Post inventory: " ,req.body);
    db.Inventory.create(req.body)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  // Update product in db 
  update: function(req, res) {
    db.Inventory.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  // Remove product from db
  remove: function(req, res) {
    db.Inventory.findById(req.params.id)
      .then(dbInventory => dbInventory.remove())
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  }
};