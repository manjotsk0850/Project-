const mongoose=require('mongoose')
const Products=new mongoose.Schema({
    name: {type:String},      // Product name
    category: {type:String},  // usable, or showpiece
    usage: {type:String},     // if watch : fashion
    price: {type:Number}      // Product price

})

module.exports=mongoose.model('Product',Products)