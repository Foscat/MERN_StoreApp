var db = require("../models");

// No delete feature on history to prevent records from being tampered with

module.exports = {
  // Find all recipts for user
  findAll: function(req, res) {
    db.GenHistory.find(req.query)
      .then(dbRecipt => res.json(dbRecipt))
      .catch(err => res.status(422).json(err));
  },
  // Find one recipt
  findById: function(req, res) {
    db.GenHistory.find({ _headlineId: req.params.id })
    .then(dbRecipt => res.json(dbRecipt))
    .catch(err => res.status(422).json(err));
  },
  // Create a new recipt
  create: function(req, res) {
    db.GenHistory.create(req.body)
    .then(dbRecipt => res.json(dbRecipt))
    .catch(err => res.status(422).json(err))
  },
  // Delete a recipt with a given id
  remove: function(req, res) {
    db.GenHistory.remove({ _id: req.params.id })
    .then(dbRecipt => res.json(dbRecipt))
    .catch(err => res.status(422).res.json(err));
  }
};