const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class UserService {

 registerUser = async (userData) => {
  let savedUser= "Existing";
    const {username, email, password} = userData;
    const existingUser = await User.findOne({email:email});
    if(existingUser) {
        return savedUser;
    }
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
      savedUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return savedUser;
 };


   loginUser = async (userData) => {
    let accessToken = "Fail";
    const user = await User.findOne({email:userData.email});
    if(user && (await bcrypt.compare(userData.password, user.password))) {
       accessToken = jwt.sign({
          user: {    // payload
              username: user.username,
              email: user.email,
              id: user._id,
             }, 
        }, process.env.ACCESS_TOKEN_SECRET,
           {expiresIn: "30m"}   
       );
     return accessToken;
    } else {
       return accessToken;
    }
  };

 getUser = async (userId) => {
  const user = await User.findById(userId);
  return user;
};



}

module.exports = UserService; 