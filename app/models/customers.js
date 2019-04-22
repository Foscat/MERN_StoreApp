const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({

    email: { type: String, unique: true },
    password: { type: String, required: true },
    user_type: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    phone_num: { type: String },
    zipcode: { type: Number },
    payments: {type: Object},
    sale_history: { type: Array },
    coupons: {type: Array },
    user_since: {type: Date },
    created_at: { type: Date },
})

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;