var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next)=>{
  res.send('respond with a resource');
});

//GET 	/users/new		//add new user
router.get("/new",(req, res, next)=>{
	res.send("/user/new");
});

//POST 	/users			//post a new user
router.post("/", (req, res, next)=>{
	res.send("/user/post");
});

//GET 	/users/:id		//show one user
router.get("/:id", (req, res, next)=>{
	res.send("/post/:id");
});

// GET 	/users/:id/edit	//edit a user
router.get("/:id/edit", (req, res, next)=>{
	res.send("/:id/edit");
});
// PUT		/users/:id		//update user
router.put("/:id", (req, res, next)=>{
	res.send("/:id");
});
// DELET	/user/:id		//destroy a user
router.delete("/:id", (req, res, next)=>{
	res.send("/:id");
});

//REST
// GET 	/users			//show all users
// GET 	/users/new		//add new user
// POST 	/users			//post a new user
// GET 	/users/:id		//show one user
// GET 	/users/:id/edit	//edit a user
// PUT		/users/:id		//update user
// DELET	/user/:id		//destroy a user


module.exports = router;
