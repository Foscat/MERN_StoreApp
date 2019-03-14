// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./app/routes")
const app = express();
const PORT = process.env.PORT || 3001;

// Use express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
// Have express use static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Have express use routes
app.use(routes);

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/mern_storeapp",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// Use express to start server
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
