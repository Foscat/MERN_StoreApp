const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Customer.find(req.query)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Customer.findById(req.params.id)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Customer.create(req.body)
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Update log:", req.params.id, req.body)
    db.Customer.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbCustomer => (res.json(dbCustomer)))
      .catch(err => res.status(422).json(err));
      
  },
  remove: function(req, res) {
    db.Customer.findById(req.params.id)
      .then(dbCustomer => dbCustomer.remove())
      .then(dbCustomer => res.json(dbCustomer))
      .catch(err => res.status(422).json(err));
  }
};