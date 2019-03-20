const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Customers.find(req.query)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Customers.findById(req.params.id)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Customers.create(req.body)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Customers.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Customers.findById(req.params.id)
      .then(dbCustomer => dbCustomer.remove())
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  }
};