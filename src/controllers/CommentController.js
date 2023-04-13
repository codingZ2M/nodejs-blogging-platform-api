const asyncHandler = require("express-async-handler");
const  CommentService = require("../service/CommentService");

const commentService = new CommentService();

class CommentController {

  //@desc Get Comments based on Post Id
//@route GET /api/comments/post/:post_id
//@access private
 getCommentsByPost = asyncHandler(async (req, res) => {
  const comments =  await commentService.getCommentsByPost(req.params.post_id);
  res.status(200).json(comments);
  });


//@desc Create new Comment
//@route POST /api/comments
//@access private
 createComment = asyncHandler(async (req, res) => {
  const {user_id, comment, post_id} = req.body;

  if(!user_id || !comment || !post_id ) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }

  const savedComment = await commentService.createComment({user_id, comment, post_id});
  if(savedComment == null) {
    res.status(404);
     throw new Error("User or Post Not Found!");
   }
   res.status(200).json(savedComment);
});


//@desc Get Comment
//@route GET /api/comments/:id
//@access private
 getComment = asyncHandler(async (req, res) => {
  const comment = await commentService.getComment(req.params.id);
  if(!comment){
    res.status(404);
    throw new Error("Comment Not Found!");
  }
    res.status(200).json(comment);
 });

//@desc Update Comment
//@route PUT /api/comments/:id
//@access private
 updateComment = asyncHandler(async (req, res) => {
  const {user_id, comment, post_id} = req.body;
    const updatedComment = await commentService.updateComment(req.params.id, {user_id, comment, post_id });
    if(!updatedComment){
      res.status(404);
      throw new Error("Comment not found to update !");
    }
      res.status(200).json(updatedComment);
});


//@desc Delete Comment
//@route DELETE /api/comment/:id
//@access private
 deleteComment = asyncHandler(async (req, res) => {
  const comment = await commentService.deleteComment(req.params.id);
  if(!comment){
    res.status(404);
    throw new Error("Comment not found to delete!");
  }
    res.status(200).json({message:`Comment is deleted for ${comment._id}`});
  });

}

module.exports= CommentController;