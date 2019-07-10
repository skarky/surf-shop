const User = require("../models/user");

module.exports = {
	postRegister(req, res, next){
		User.register(new User({username: req.body.username}), req.body.password, (err)=>{
			if(err){
				console.log(err);
			}else{
				console.log("User register");
				res.redirect("/");
			}
		})
	}
}