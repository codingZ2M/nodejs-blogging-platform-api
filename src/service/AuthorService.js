const Author = require("../models/AuthorModel");

class AuthorService {

 getAuthors =  async () => {
  const authors = await Author.find();
  return authors;
  };


 createAuthor = async (authorData) => {
  const author = new Author(authorData);
   const savedAuthor = await Author.create(author);
    return savedAuthor;
   };


 getAuthor = async (authorId) => {
  const author = await Author.findById(authorId);
  return author;
};


 updateAuthor = async (authorId, authorData) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
                                          authorId,
                                          authorData,
                                          {new: true}
                                        )
     return updatedAuthor;
};


 deleteAuthor = async (authorId) => {
  const author = await Author.findByIdAndRemove(authorId);
  return author;
 };

}

module.exports = AuthorService; 