const mongoose = require('mongoose');

//Schema 
const ProductSchema = new mongoose.Schema(
    { 
        brand:{
            type: String,
            required: true
        },
        model:{
            type : String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        color:{
            type : String,
            required: true
        },
       
    }
)


//Model
const ProductModel = mongoose.model('product', ProductSchema);

//Export the model
module.exports = ProductModel;