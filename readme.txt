Category
========
POST: localhost:5001/api/categories
{
  "name": "Front-End Web Development"
}

GET: localhost:5001/api/categories

GET: localhost:5001/api/categories/:categoryId

PUT: localhost:5001/api/categories/:id
{
   "name": "Node.js Back-End Development"
}

DELETE: localhost:5001/api/categories/:id
================================================================================

Author
======
POST: localhost:5001/api/authors
{
  "name": "Rick",
  "bio": "Front-End Web Developer with 10 years experience "
}
GET: localhost:5001/api/authors
GET: localhost:5001/api/authors/:id
PUT: localhost:5001/api/authors/:id
DELETE: localhost:5001/api/authors/:id
==============================================================================

Post
====
POST: localhost:5001/api/posts
{
  "title": "REST API Development with Node.js",
  "body": "Node.js is used for REST API",
  "author_id": "642675398d128a189fc7a020",
  "category_id": "64267121096b7907b5ee1d45"
}

Limiting Records
GET: localhost:5001/api/posts (Records By Default)
GET: localhost:5001/api/posts?records=2

Pagination
GET: localhost:5001/api/posts?records=2&page=5

GET: localhost:5001/api/posts/category/:category_id
GET: localhost:5001/api/posts/:id
PUT: localhost:5001/api/posts/:id
DELETE: GET: localhost:5001/api/posts/:id 

POST: localhost:5001/api/posts/insertMany
[
  {
  "title": "REACT JS APP Development",
  "body": "Building UI's with React JS",
  "author_id": "642675398d128a189fc7a020",
  "category_id": "64267072096b7907b5ee1d43"
},
{
  "title": "REACT JS APP Development",
  "body": "Building UI's with React JS",
  "author_id": "642675398d128a189fc7a020",
  "category_id": "64267072096b7907b5ee1d43"
},
{
  "title": "REACT JS APP Development",
  "body": "Building UI's with React JS",
  "author_id": "642675398d128a189fc7a020",
  "category_id": "64267072096b7907b5ee1d43"
}
]
==================================================================================

User:
=====
POST: http://localhost:5001/api/users/register
 {
  "username": "Mike",
  "email": "mike@gmail.com",
  "password": "mike123"
}

POST: http://localhost:5001/api/users/login
 {
  "email": "mike@gmail.com",
  "password": "mike123"
}

GET: http://localhost:5001/api/users/
Note: User will get a token when they login, that can be sent when they want to view user profile.
==============================================================================================

Comment:
=======
POST: http://localhost:5001/api/comments/
{
  "user_id": "6436a68f855730362b89611d",
  "comment": "Reallay Beautiful article for React",
  "post_id": "642697055597632d62fb8b27"
}

GET: http://localhost:5001/api/comments/post/post_id
Note: User will get a token when they login, that can be sent when they want to view all comments for a post.
