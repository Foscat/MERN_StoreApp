const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventory = new Schema({

    product_name: { type: String, unique: true },
    product_type: { type: String, required: true },
    department: { type: String },
    manufacturer: { type: String },
    total_stock: { type: Number },
    created_at: { type: Date },
})

const inventoryData = mongoose.model("inventory", inventory);
module.exports = inventoryData;