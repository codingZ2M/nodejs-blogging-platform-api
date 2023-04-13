const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/ValidateTokenHandler");

const  CommentController = require("../controllers/CommentController");  
const commentController = new CommentController();

// Validate all Comment related requests using custom middleware 'validateToken'
router.use(validateToken);

router.route("/").post( commentController.createComment );
router.route("/:id").get(commentController.getComment ).put( commentController.updateComment).delete( commentController.deleteComment)
router.route("/post/:post_id").get(commentController.getCommentsByPost )


 module.exports = router;