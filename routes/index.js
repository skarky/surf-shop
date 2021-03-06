const express 	= require('express');
const router 	= express.Router();
// const passport = require("passport");
const { postRegister, postLogin, postLogout }	= require("../controllers");
const { errorHendler }	= require("../middleware");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET 	/registar
router.get("/register",(req, res, next)=>{
	res.send("/register");
});

//POST 	/register			//post a new user
router.post("/register", errorHendler(postRegister));

//GET 	/login		//show one user
router.get("/login", (req, res, next)=>{
	res.send("/login");
});

// POST 	/login
router.post("/login", postLogin);

//GET logout
router.get("/logout", postLogout);
// GET		/profile		//update user
router.get("/profile", (req, res, next)=>{
	res.send("profile");
});

// // GET		/profile		//update user
// router.put("/profile/:user_id", (req, res, next)=>{
// 	res.send("profile");
// });
/*
PASSWORD RESET
*/
// GET		/forgot password		//update user
router.get("/forgot-pw", (req, res, next)=>{
	res.send("get forgot-pw");
});
// PUT		/orgot-pw		//update user
router.put("/forgot-pw", (req, res, next)=>{
	res.send("put forgot-pw");
});
// GET		/reset-pw/:token		//update user
router.get("/reset/:token", (req, res, next)=>{
	res.send("profile");
});
// PUT		/preset-pw/:token	//update user
router.put("/reset/:token", (req, res, next)=>{
	res.send("put reset-pw/:token");
});

module.exports = router;
