const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");
const Category = require("../models/CategoryModel");
const Author = require("../models/AuthorModel");

//@desc Get all Posts
//@route GET /api/posts
//@access private
const getPosts = asyncHandler(async (req, res) => {
  
  let {records = 3, page = 1} = req.query;
  const limitRecords = parseInt(records);
  const skip = (page) * records;

  const posts = await Post.find().limit(limitRecords).skip(skip);
  res.status(200).json({page: page, Records:limitRecords, posts});
  });

  //@desc Get Posts based on Category
//@route GET /api/posts/:category
//@access private
const getPostsByCategory = asyncHandler(async (req, res) => {
  const posts = await Post.find({category_id: req.params.category_id});
  res.status(200).json({posts});
  });


//@desc Create new Post
//@route POST /api/posts
//@access private
const createPost = asyncHandler(async (req, res) => {
  const {title, body, author_id, category_id} = req.body;

  // Check if category exists
  const category = await Category.findById(category_id);
  if (!category) {
    res.status(404);
    throw new Error("Category not found to create a post!");
  }

  const author = await Author.findById(author_id);
  if(!author){
    res.status(404);
    throw new Error("Author not found to write a post!");
  }

  if(!title || !body || !author_id || !category_id) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }
   const post = await Post.create({
     title,
     body,
     author_id,
     category_id
   })
   res.status(200).json(post);
});


//@desc Get Post
//@route GET /api/posts/:id
//@access private
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if(!post){
    res.status(404);
    throw new Error("Post Not Found!");
  }
    res.status(200).json(post);
    });

//@desc Update Post
//@route PUT /api/posts/:id
//@access private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if(!post){
    res.status(404);
    throw new Error("Post Not Found!");
  }
  const updatedPost = await Post.findByIdAndUpdate(
                                          req.params.id,
                                          req.body,
                                          {new: true}
                                        )
    res.status(200).json(updatedPost);
});

//@desc Delete Post
//@route DELETE /api/posts/:id
//@access private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if(!post){
    res.status(404);
    throw new Error("Post Not Found!");
  }
    await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Post is deleted for ${req.params.id}`});
});



const insertManyPosts = asyncHandler(async (req, res) => {
  const postArray = req.body;
  for (const post of postArray) {
    const {title, body, author_id, category_id} = post;

    // Check if Category exists
  const category = await Category.findById(category_id);
  if (!category) {
    res.status(404);
    throw new Error("Category not found to create a post!");
  }
  // Check if Author exists
  const author = await Author.findById(author_id);
  if(!author){
    res.status(404);
    throw new Error("Author not found to write a post!");
  }

    if(!title || !body || !author_id || !category_id) {
      res.status(400);
      throw new Error("All Fileds Are Mandatory!");
     }
  }
  const insertedPosts = await Post.insertMany(postArray)
  res.json(insertedPosts);
});


module.exports= { 
    getPosts, 
    getPostsByCategory,
    createPost, 
    getPost, 
    updatePost, 
    deletePost,
    insertManyPosts
  };