const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./src/config/db");
const errorHandler = require("./src/middleware/errorhandler");

const app = express();

/** Connect to MongoDB */
mongoose.connect(dbConfig.mongo.url, {retryWrites:true, w:'majority'})
    .then( ()=> {
            console.log("MongoDB Connected");
        })
        .catch((error)=> {
            console.log(error);  
})

app.use(express.json());

app.use("/api/categories", require("./src/routes/categoryRoutes")); //middleware
app.use("/api/authors", require("./src/routes/authorRoutes")); //middleware
app.use("/api/posts", require("./src/routes/postRoutes")); //middleware

app.use(errorHandler);  // Custom Middleware for Error Handling

app.listen(dbConfig.server.port, () => {
    console.log(`Example app listening on port ${dbConfig.server.port}`)
  })