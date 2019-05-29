const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // Find all customers in db
  findAll: function(req, res) {
    db.Customer.find(req.query)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  // Find one customer in db
  findById: function(req, res) {
    db.Customer.findById(req.params.id)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  // Create a new user
  create: function(req, res) {
    console.log(req.body);
    db.Customer.create(req.body)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  // Update info about a user
  update: function(req, res) {
    console.log("Update log:", req.params.id, req.body)
    db.Customer.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbCustomer => (res.json(dbCustomer)))
      .catch(err => res.status(422).json(err));
  },
  // Delete user form db
  remove: function(req, res) {
    db.Customer.findById(req.params.id)
      .then(dbCustomer => dbCustomer.remove())
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  }
};