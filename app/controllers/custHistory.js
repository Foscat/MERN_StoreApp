var db = require("../models");

module.exports = {
  // Find one note
  find: function(req, res) {
    db.CustHistory.find({ _headlineId: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  // Create a new note
  create: function(req, res) {
    db.CustHistory.create(req.body).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  // Delete a note with a given id
  delete: function(req, res) {
    db.CustHistory.remove({ _id: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  }
};