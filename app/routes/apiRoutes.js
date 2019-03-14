const mongoose = require("mongoose");
const db = require("../models")
// const request = require("request");

mongoose.connect("mongodb://localhost/mern_storeapp");

function apiRoutes(app) {
    console.log("Routes")
}