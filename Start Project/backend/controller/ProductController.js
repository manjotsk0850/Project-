const mongoose = require('mongoose')
const express=require('express')
const productServices = require('../services/productServices');
const Products = require('../models/Products')

exports.createProduct = async (req,res) => {
    const inputData=req.body;
    console.log('inputData',inputData);
    const details = await productServices.createProduct(inputData);
    console.log('details',details);
}

exports.getProduct=async(req,res)=>{
    const data = await Products.find();
    res.status(200).json({data:data});
}

exports.updateProduct=async(req,res)=>{
    await Book.updateOne({price: 379}, {
        $set: {
            name: req.body.maker
        }
    });
    res.status(200).json({
        message: "Product updated"
    })
}

exports.deleteProduct=async(req,res)=>{
    await Products.deleteMany({name:"Manjot"});
    res.status(200).json({
        message:"Product deleted"
    })
}
