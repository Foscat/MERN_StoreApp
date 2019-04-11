const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
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

const History = mongoose.model("History", historySchema);
module.exports = History;