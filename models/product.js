const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const productSchema = Schema ({
    name: String,
    image: String,
    price: {type:Number, default: 0},
    category: {type: String, enum: ['computers', 'phones', 'acessories']},
    description: String
})

module.exports = mongoose.model('Product', productSchema)