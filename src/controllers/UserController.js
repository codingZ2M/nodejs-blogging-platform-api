const asyncHandler = require("express-async-handler");
const  UserService = require("../service/UserService");

const userService = new UserService();

class UserController {
//@desc Register a User
//@route POST  /api/users/register
//@access public
 registerUser = asyncHandler(async  (req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const savedUser = await userService.registerUser({username, email, password });
    if(savedUser === "Existing") {
        res.status(400);
        throw new Error("You are already registered!");
    }
    res.status(200).json(savedUser);;
});


//@desc Login User
//@route POST    /api/users/login
//@access public
 loginUser = asyncHandler(async  (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
   const accessToken = await userService.loginUser({email, password})
   if(accessToken === "Fail") {
    res.status(401);
    throw new Error("Email / Password is not valid");
   }
   res.status(200).json({accessToken});
})


//@desc Get User
//@route GET /api/users/
//@access private
 getUser = asyncHandler(async (req, res) => {
    const user = await userService.getUser(req.user.id);
    if(!user){
      res.status(404);
      throw new Error("User Not Found!");
    }
      res.status(200).json(user);
      });

}

module.exports = UserController;