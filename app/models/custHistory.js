const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerHistorySchema = new Schema({
    _customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    cart: { type: Object},
    numItems: { type: Number },
    totalCost: { type: Number },
    totalBought: { type: Array},
    created_at: { type: Date }
})

const CustHistory = mongoose.model("CustHistory", customerHistorySchema);
module.exports = CustHistory;