const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	text :{
		type: String,
		required : true
	},
	createAt :{
		type : Date,
		defualt : Date.now
	}
});

module.exports = mongoose.model('comment',commentSchema);