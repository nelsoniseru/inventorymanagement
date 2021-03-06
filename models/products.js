const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    category: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
})
var Product = mongoose.model('Product', productSchema);

module.exports = Product