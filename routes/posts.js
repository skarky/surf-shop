const express = require('express');
const router = express.Router();
const { errorHendler } = require("../middleware");
const { getPosts, newPost, makePost, detailPost, editPost }  = require("../controllers/posts");

/* 1 GET index posts page. */
router.get('/', errorHendler(getPosts));

/* 2 GET new page. */
router.get('/new', newPost);

/* 3 POST post page. */
router.post('/', errorHendler(makePost));

/* 4 GET show page. */
router.get('/:id', errorHendler(detailPost));
  
/* 5 GET edit page. */
router.get('/:id/edit', errorHendler(editPost));

/* 6 GET update page. */
router.put('/:id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("/posts");
});

/* 7 GET destroy page. */
router.delete('/:id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("/posts/:id");
});


/*
GET 	index	/posts
GET 	new		/posts/new
POST 	create	/posts
GET 	show	/posts/:id
GET 	edit	/posts/:id/edit
PUT		update	/posts/:id
DELTE	destroy	/posts/:id

*/

module.exports = router;