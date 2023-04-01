const express = require("express");
const router = express.Router();

const { getPosts, 
        getPostsByCategory,
        createPost,
        getPost,
        updatePost,
        deletePost, insertManyPosts} = require("../controllers/PostController");


router.route("/").get( getPosts).post( createPost );

router.route("/:id").get(getPost ).put( updatePost).delete( deletePost)

router.route("/category/:category_id").get(getPostsByCategory )

router.route("/insertMany").post( insertManyPosts );

 module.exports = router;