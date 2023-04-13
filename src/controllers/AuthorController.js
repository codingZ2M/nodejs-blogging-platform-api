const asyncHandler = require("express-async-handler");
const  AuthorService = require("../service/AuthorService");

const authorService = new AuthorService();

class AuthorController {

//@desc Get all Authors
//@route GET /api/authors
//@access private
 getAuthors = asyncHandler(  async (req, res) => {
  const authors = await authorService.getAuthors();
  res.status(200).json(authors);
  }  );


//@desc Create new Author
//@route POST /api/authors
//@access private
 createAuthor = asyncHandler(async (req, res) => {
  const {name, bio} = req.body;
  if(!name || !bio) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }
  const author = await authorService.createAuthor({name, bio });
  res.status(200).json(author);
   });


//@desc Get Author
//@route GET /api/authors/:id
//@access private
 getAuthor = asyncHandler(async (req, res) => {
  const author = await authorService.getAuthor(req.params.id);
  if(!author){
    res.status(404);
    throw new Error("Author Not Found!");
  }
    res.status(200).json(author);
});

//@desc Update Author
//@route PUT /api/authors/:id
//@access private
 updateAuthor = asyncHandler(async (req, res) => {
  const {name, bio} = req.body;
  const updatedAuthor = await authorService.updateAuthor(req.params.id, {name, bio });
  if(!updatedAuthor){
    res.status(404);
    throw new Error("Author Not Found!");
  }
    res.status(200).json(updatedAuthor);
});

//@desc Delete Author
//@route DELETE /api/authors/:id
//@access private
 deleteAuthor = asyncHandler(async (req, res) => {
  const author = await authorService.deleteAuthor(req.params.id);
  if(!author){
    res.status(404);
    throw new Error("Author Not Found!");
   }
    res.status(200).json({message:`Author is deleted for ${author._id}`});
 });

}

module.exports = AuthorController; 