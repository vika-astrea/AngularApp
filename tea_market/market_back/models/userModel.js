const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
email:{type: String, required: true},
password: {type: String, required: true, minlength:5},
displayName:{type:String, required: true}
});

module.exports =User =mongoose.model("user", userSchema)