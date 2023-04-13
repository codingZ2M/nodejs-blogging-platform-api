const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username can't be null"],
    },
    email:{
        type:String,
        required: [true, "Email can't be null"],
        unique: [true, "Email Id is already registered!"],
    },
    password:{
        type:String,
        required: [true, "Password can't be null"]
    },
}, 
{
    timestamps: true,
}

)

module.exports = mongoose.model("User", userSchema);