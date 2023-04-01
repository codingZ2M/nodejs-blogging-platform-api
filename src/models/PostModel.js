const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
      },
      category_id: {  // reference to Category model
        type: mongoose.Schema.Types.ObjectId, 
        required:true,
        ref: 'Category'
     },
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Post", postSchema);