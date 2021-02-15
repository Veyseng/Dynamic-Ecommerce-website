const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, 'Add the name of the product'],
		unique : true,
		maxlength :[50, 'Name cannot be more than 50 characters']
	},
	slug : String,
	description :{
		type : String,
		required : [true, 'Add the description of the product'],
		maxlength :[100, 'Description cannot be more than 100 characters']
	},
	cost :Number,
	promotionCost : Number,
	photo :{
		type : String,
		defualt: 'no-photo.jpg'
	},
	createAt :{
		type : Date,
		defualt : Date.now
	}
});

module.exports = mongoose.model('product',productSchema);