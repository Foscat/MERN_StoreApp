import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/customers");
  },
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
    return axios.post("/api/inventory", productData);
  }
};
// http://localhost:3001/api/inventory