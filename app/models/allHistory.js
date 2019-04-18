const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalHistorySchema = new Schema({

    signed_in: {type: Boolean, required: true},
    cart: { type: Object},
    numItems: { type: Number },
    totalCost: { type: Number },
    totalBought: { type: Array},
    created_at: { type: Date }
})

const GenHistory = mongoose.model("GenHistory", generalHistorySchema);
module.exports = GenHistory;