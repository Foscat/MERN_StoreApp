const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Inventory.find(req.query)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Inventory.findById(req.params.id)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Inventory.create(req.body)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Inventory.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Inventory.findById(req.params.id)
      .then(dbInventory => dbInventory.remove())
      .then(dbInventory => res.json(dbInventory))
      .catch(err => res.status(422).json(err));
  }
};