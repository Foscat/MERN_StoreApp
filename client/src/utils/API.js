import axios from "axios";

export default {
  
  // User CRUD
  addUser: function(userData) {
    console.log(userData);
    return axios.post("/api/customers", userData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/customers");
  },
  // update info on user
  updateUser: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/customers/" + id, updateData)
  },
  // Delete a user
  deleteUser: function(id) {
    return axios.delete("/api/customers/" + id);
  },

  ///////////////////////////////////////////////////////////////////////

  // Product CRUD

  // Gets all products in inventory
  getProducts: function() {
    return axios.get("/api/inventory");
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves an product to the database
  addProduct: function(productData) {
    console.log(productData);
    return axios.post("/api/inventory", productData);
  },
  // Updates product info in the db
  updateProduct: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/inventory/" + id, updateData)

  },

  //////////////////////////////////////////////////////////////////

  // Customer Purchase History CRUD

  // Gets all customer purchase history
  getAllCustHistory: function() {
    return axios.get("/api/customers/:id/history");
  },
  // Deletes the history with the given id
  delAllCustHistory: function(id) {
    return axios.delete("/api/customers/:id/history/" + id);
  },
  // Saves an recipt as history to the database
  addCustHistory: function(reciptData) {
    console.log(reciptData);
    return axios.post("/api/customers/:id/", reciptData);
  },
  // Change info on old recipts
  updateCustHistory: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/customers/:id/history/" + id, updateData)
  },

  ///////////////////////////////////////////////////////////////////////
  
  // Any Purchase History for manager CRUD

  // Gets all product purchase history (user, and freegrazer)
  getAllHistory: function() {
    return axios.get("/api/history");
  },
  // Deletes a specific history entry with the given id
  delAllHistory: function(id) {
    return axios.delete("/api/history/" + id);
  },
  // Saves an recipt as history to the database
  addHistory: function(reciptData) {
    console.log(reciptData);
    return axios.post("/api/history", reciptData);
  },
  // Change info on old recipts
  updateHistory: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/history/" + id, updateData)
  },


};