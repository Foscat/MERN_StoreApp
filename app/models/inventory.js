const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    product_name: { type: String, unique: true },
    product_type: { type: String, required: true },
    department: { type: String },
    manufacturer: { type: String },
    total_stock: { type: Number },
    created_at: { type: Date },
})

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;