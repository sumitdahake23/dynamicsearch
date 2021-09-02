const mongoose = require("mongoose");
const apimodel = mongoose.Schema({
    first_name:String,
    last_name:String,
    state:String,
    city:String,
    zip:Number
});
module.exports = mongoose.model("student", apimodel);

