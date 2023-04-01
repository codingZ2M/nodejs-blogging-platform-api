const express = require("express");
const router = express.Router();

const {getAuthors, 
    createAuthor,
     getAuthor,
     updateAuthor,
     deleteAuthor} = require("../controllers/AuthorController");

     
router.route("/").get( getAuthors).post( createAuthor );

router.route("/:id").get(getAuthor ).put( updateAuthor).delete( deleteAuthor)


 module.exports = router;