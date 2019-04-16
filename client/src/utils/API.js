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
  updateUser: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/customers/" + id, updateData)
  },
  deleteUser: function(id) {
    return axios.delete("/api/customers/" + id);
  },


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
  updateProduct: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/inventory/" + id, updateData)

  },

  // History CRUD

  // Gets all products in inventory
  getHistory: function() {
    return axios.get("/api/customers/:id/history");
  },
  // Deletes the product with the given id
  deleteHistory: function(id) {
    return axios.delete("/api/customers/:id/history/" + id);
  },
  // Saves an product to the database
  addHistory: function(reciptData) {
    console.log(reciptData);
    return axios.post("/api/customers/:id/", reciptData);
  },
  updateHistory: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/customers/:id/history/" + id, updateData)

  }
};