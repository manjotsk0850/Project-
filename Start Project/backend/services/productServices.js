const mongoose = require('mongoose')
const Book = require('../models/Products')

exports.createProduct = async(data)=>{
    return await Book.create(data)
}
exports.getProduct = async ()=>{

    return await Book.find()
}
