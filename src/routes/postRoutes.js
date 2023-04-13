const express = require("express");
const router = express.Router();

const  PostController = require("../controllers/PostController");
     
const postController = new PostController();


router.route("/").get( postController.getPosts).post( postController.createPost );

router.route("/:id").get(postController.getPost ).put( postController.updatePost).delete( postController.deletePost)

router.route("/category/:category_id").get(postController.getPostsByCategory )

router.route("/insertMany").post( postController.insertManyPosts );

 module.exports = router;