const express = require('express');
const router = express.Router();
const { errorHendler } = require("../middleware");
const { getPosts, newPost, makePost, detailPost, editPost, updatePost, deletePost }  = require("../controllers/posts");

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
router.put('/:id', errorHendler(updatePost));

/* 7 GET destroy page. */
router.delete('/:id', errorHendler(deletePost));


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