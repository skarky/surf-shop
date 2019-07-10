const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: String,
	price: Number,
	description: String,
	images: String,
	location: String,
	autor: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}],
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: "Review"
	}]
})

module.exports = mongoose.model("Post", PostSchema);

/*

Title - String
Price - Number
Description - String
Images String
Location String
Autor - array of Objects ref User
reviews - array of Objects ref Review

*/ 