const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Category can't be null"],
    },
 }, {
    timestamps: true,
})

module.exports = mongoose.model("Category", categorySchema);