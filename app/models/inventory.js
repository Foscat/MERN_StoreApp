const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    product_name: { type: String, unique: true },
    department: { type: String },
    manufacturer: { type: String },
    total_stock: { type: Number },
    description: { type: String},
    created_at: { type: Date },
})

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;