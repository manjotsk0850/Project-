const express = require('express')
const router=express.Router();
//express.router ka kaam hota hai just routing krna
const ProductController = require('../controller/ProductController')

//app.use is used for middlewares
router.post('/create-Product',ProductController.createProduct);
router.get('/get-Product',ProductController.getProduct);
router.put('/update-Product',ProductController.updateProduct);
router.delete('/delete-Product', ProductController.deleteProduct);

// routing krke access app ko de raha hoon
module.exports = router;