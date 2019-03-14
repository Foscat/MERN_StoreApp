const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({

    email: { type: String, unique: true },
    password: { type: String },
    user_type: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    phone_num: { type: String },
    zipcode: { type: Number },
    created_at: { type: Date },
})

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;