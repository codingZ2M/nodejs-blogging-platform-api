const express = require("express");
const validateToken = require("../middleware/ValidateTokenHandler");

const  UserController = require("../controllers/UserController");
     
const userController = new UserController();

const router = express.Router();

router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

// Using custom middleware validateToken for Authorization
router.get("/",  validateToken,  userController.getUser)

module.exports= router;