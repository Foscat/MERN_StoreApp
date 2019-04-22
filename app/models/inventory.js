const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    product_name: { type: String, unique: true },
    image: { type: String },
    department: { type: String },
    manufacturer: { type: String },
    total_stock: { type: Number },
    price: { type: Number },
    description: { type: String },
    discounted: { type: Boolean },
    weight: { type: Number, required: true},
    volume: {type: Number, required: true },
    created_at: { type: Date }
})

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;