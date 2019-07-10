const User = require("../models/user");
const passport = require("passport");

module.exports = {

	//register controller
	async postRegister(req, res, next){
		const newUser= {
			username: req.body.username,
			email: req.body.email,
			profilePicture: req.body.image
		};
		// User.register(newUser, req.body.password, (err)=>{
		// 	if(err){
		// 		console.log(err);
		// 	}else{
		// 		console.log("User register");
		// 		res.redirect("/");
		// 	}
		// })
		//ECMA 2016ß
		await User.register(newUser, req.body.password);
		res.redirect("/");

	},


	//login controller
	postLogin(req, res, next){
		passport.authenticate('local', 
		{ successRedirect: '/',
    	failureRedirect: '/login'
		})(req, res, next);
	},

	//logout controller
	postLogout(req, res, next){
		req.logout();
  		res.redirect('/');
		
	}

}