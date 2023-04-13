const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    user_id: {  // reference to User model
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "User id can't be null"],
        ref: 'User'
     },
    comment:{
        type:String,
        required: [true, "Comment can't be null"],
    },
    post_id: {  // reference to Post model
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Post id can't be null"],
        ref: 'Post'
     },
 }, {
    timestamps: true,
})

module.exports = mongoose.model("Comment", commentSchema);