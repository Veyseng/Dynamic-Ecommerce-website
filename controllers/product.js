const product = require('../models/product');
// desc Get all products
// @route GET /api/v1/products
// @access Public
exports.getProducts = (req, res, next) => {
	res.status(200).json({success : true, msg : "show all products"})
}

// desc Get all products
// @route GET /api/v1/products
// @access Public
exports.getProduct = (req, res, next) => {
	res.status(200).json({success : true, msg : "show a product"})
}
// desc Update all 
// @route POST /api/v1/products
// @access Private
exports.updateProduct = (req, res, next) => {
	res.status(200).json({success : true, msg : "update a product"})
}

// desc Update new product
// @route PUT /api/v1/products
// @access Private
exports.createProduct = async (req, res, next) => {
	try{
		const product = await product.create(req.body);
		res.status(201).json({
			success : true,
			data : product
		})
	}catch(err){
		res.status(400).json({
			sucess: false
		})
	}	
}

// desc Delete new product
// @route DELETE /api/v1/products
// @access Private
exports.deleteProduct = (req, res, next) => {
	res.status(200).json({success : true, msg : "delete a product"})
}