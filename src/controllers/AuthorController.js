const asyncHandler = require("express-async-handler");
const Author = require("../models/AuthorModel");

//@desc Get all Authors
//@route GET /api/authors
//@access private
const getAuthors = asyncHandler(  async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
  }  );


//@desc Create new Author
//@route POST /api/authors
//@access private
const createAuthor = asyncHandler(async (req, res) => {
  const {name, bio} = req.body;
  if(!name || !bio) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }
   const author = await Author.create({
    name,
    bio,
   })
   res.status(200).json(author);
   });


//@desc Get Author
//@route GET /api/authors/:id
//@access private
const getAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);
  if(!author){
    res.status(404);
    throw new Error("Author Not Found!");
  }
    res.status(200).json(author);
});

//@desc Update Author
//@route PUT /api/authors/:id
//@access private
const updateAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);
  if(!author){
    res.status(404);
    throw new Error("Author Not Found!");
  }
  const updatedAuthor = await Author.findByIdAndUpdate(
                                          req.params.id,
                                          req.body,
                                          {new: true}
                                        )
    res.status(200).json(updatedAuthor);
});

//@desc Delete Author
//@route DELETE /api/authors/:id
//@access private
const deleteAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);
  if(!author){
    res.status(404);
    throw new Error("Author Not Found!");
  }
    await Author.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Author is deleted for ${req.params.id}`});
});

module.exports= { getAuthors, 
    createAuthor, 
    getAuthor, 
    updateAuthor, 
    deleteAuthor};