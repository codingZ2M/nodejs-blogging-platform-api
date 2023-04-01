const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Author name can't be null"],
    },
    bio:{
        type:String,
        required: [true, "Author bio can't be null"],
    }
 }, {
    timestamps: true,
})

module.exports = mongoose.model("Author", authorSchema);