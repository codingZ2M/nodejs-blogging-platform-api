
const Post = require("../models/PostModel");
const Category = require("../models/CategoryModel");
const Author = require("../models/AuthorModel");

class PostService {

 getPosts =  async (limitRecords, skip) => {
  const posts = await Post.find().limit(limitRecords).skip(skip);
  return posts;
  };

getPostsByCategory = async (categoryId) => {
  const posts = await Post.find({category_id: categoryId});
  return posts;
  };


  createPost = async (postData) => {
    const category = await Category.findById(postData.category_id);
    const author = await Author.findById(postData.author_id);

      if (!category || !author ) {
        return null;
      }
    const post = new Post(postData);
     const savedPost = await Post.create(post) 
    return savedPost;
};
    

    getPost = async (postId) => {
      const post = await Post.findById(postId);
      return post;
    };
    
    updatePost = async (postId, postData) => {
      const updatedPost = await Post.findByIdAndUpdate(
                                            postId,
                                            postData,
                                            {new: true}
                                          )
       return updatedPost;
    };
    
    deletePost = async (postId) => {
      const post = await Post.findByIdAndRemove(postId);
    return post;
    };


    insertManyPosts = async (postArray) => {
      const categoryAndAuthor ="Not Found"

      for (const post of postArray) {
        const {author_id, category_id} = post;
        // Check if Category exists
        const category = await Category.findById(category_id);
          if (!category) {
            return categoryAndAuthor;
          }
      // Check if Author exists
        const author = await Author.findById(author_id);
          if(!author){
            return categoryAndAuthor;
          }
      }
      const insertedPosts = await Post.insertMany(postArray);
      return insertedPosts;
    };
    
}

module.exports = PostService; 