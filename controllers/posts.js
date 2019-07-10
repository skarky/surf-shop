const Post = require("../models/post");

module.exports = {

	async getPosts(req, res, next){
  		
  		let posts = await Post.find({});
  		res.render("./posts/index", {posts});

	},

	newPost(req, res, next){
  res.render("./posts/new");
	},

	async makePost(req, res, next){
		
		// let newPost = {
		// 	title: req.body.title,
		// 	price: req.body.price,
		// 	description: req.body.description,
		// 	// images: req.body.title,
		// 	location: req.body.location,
			// autor: [{
			// 	type: Schema.Types.ObjectId,
			// 	ref: "User"
			// }],
			// reviews: [{
			// 	type: Schema.Types.ObjectId,
			// 	ref: "Review"
			// }]		
			// }

		// Post.create(newPost, function(err, post){
		// 	if(err){
		// 		console.log(err);
		// 	}else{
		// 		console.log(post);
		// 		res.render("./posts/");
		// 	}
		// })
  		// res.render("./posts/");
	let post = await Post.create(req.body);
		res.redirect(`./posts/${post.id}`);
	},

	async detailPost(req, res, next){
		let post = await Post.findById(req.params.id);
  		res.render("./posts/show", {post});
		},
	async editPost(req, res, next){
  	// res.render('index', { title: 'Express' });
  	res.render("/posts/:id/edit");
	}
}