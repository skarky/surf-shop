const mongoose = require ("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
	password: String,
	username: String,
	profilePicture: String,
	post: [{
		type: Schema.Types.ObjectId,
		ref: "Post"
	}]
	// review: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Review"
	// }]
});

UserSchema.plugin(passportLocalMongoose)
// const User = mongoose.model("User", UserSchema);
module.exports = mongoose.model("User", UserSchema);

/*
email - String
password - String
username - String
Profile picture String
post - array of Objects ref Post
reviews - array of Objects ref Review
*/