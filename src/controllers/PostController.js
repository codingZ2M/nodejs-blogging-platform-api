const asyncHandler = require("express-async-handler");
const  PostService = require("../service/PostService");

const postService = new PostService();

class PostController {

//@desc Get all Posts
//@route GET /api/posts
//@access private
getPosts = asyncHandler(async (req, res) => {
  let {records = 3, page = 1} = req.query;
  const limitRecords = parseInt(records);
  const skip = (page) * records;

  const posts = await postService.getPosts(limitRecords, skip);
  res.status(200).json({page: page, Records:limitRecords, posts});
  });


  //@desc Get Posts based on Category
//@route GET /api/posts/:category
//@access private
getPostsByCategory = asyncHandler(async (req, res) => {
  const posts =  await postService.getPostsByCategory(req.params.category_id);
  res.status(200).json({posts});
  });


//@desc Create new Post
//@route POST /api/posts
//@access private
createPost = asyncHandler(async (req, res) => {
  const {title, body, author_id, category_id} = req.body;

  if(!title || !body || !author_id || !category_id) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }

  const savedPost = await postService.createPost({title, body, author_id, category_id});
 if(savedPost == null) {
  res.status(404);
   throw new Error("Author or Category Not Found!");
 }
   res.status(200).json(savedPost);
});


//@desc Get Post
//@route GET /api/posts/:id
//@access private
getPost = asyncHandler(async (req, res) => {
  const post = await postService.getPost(req.params.id);
  if(!post){
    res.status(404);
    throw new Error("Post Not Found!");
  }
    res.status(200).json(post);
});


//@desc Update Post
//@route PUT /api/posts/:id
//@access private
updatePost = asyncHandler(async (req, res) => {
    const {title, body, author_id, category_id} = req.body;
    const updatedPost = await postService.updatePost(req.params.id, {title, body, author_id, category_id });
    if(!updatedPost){
      res.status(404);
      throw new Error("Post not found to update !");
    }
      res.status(200).json(updatedPost);
});


//@desc Delete Post
//@route DELETE /api/posts/:id
//@access private
deletePost = asyncHandler(async (req, res) => {
  const post = await postService.deletePost(req.params.id);
  if(!post){
    res.status(404);
    throw new Error("Post not found to delete!");
  }
    res.status(200).json({message:`Post is deleted for ${post._id}`});
});



insertManyPosts = asyncHandler(async (req, res) => {
  const postArray = req.body;

  for (const post of postArray) {
    if(!post.title || !post.body || !post.author_id || !post.category_id) {
      res.status(400);
      throw new Error("All Fileds Are Mandatory!");
    }
  }

  const insertedPosts = await postService.insertManyPosts(postArray)
  if (insertedPosts === "Not Found") {
    res.status(404);
    throw new Error("Couldn't insert posts! Check Author ID & Category ID");
  }
  res.json(insertedPosts);
});

}

module.exports= PostController;