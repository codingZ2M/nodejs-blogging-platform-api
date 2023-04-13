
const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

class CommentService {

getCommentsByPost = async (postId) => {
  const comments = await Comment.find({post_id: postId});
  return comments;
  };


  createComment = async (commentData) => {
    const user = await User.findById(commentData.user_id);
    const post = await Post.findById(commentData.post_id);

      if (!user || !post ) {
         return null;
      }
    const comment = new Comment(commentData);
    const savedComment = await Comment.create(comment) 
    return savedComment;
};
    

    getComment = async (commentId) => {
      const comment = await Comment.findById(commentId);
      return comment;
    };
    
    updateComment = async (commentId, commentData) => {
      const updatedComment = await Comment.findByIdAndUpdate(
                                            commentId,
                                            commentData,
                                            {new: true}
                                          )
       return updatedComment;
    };
    
    deleteComment = async (commentId) => {
      const comment = await Comment.findByIdAndRemove(commentId);
    return comment;
    };
    
}

module.exports = CommentService; 