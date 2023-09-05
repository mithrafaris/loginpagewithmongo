const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
 isAdmin:{
    type:Number,
    required:true,
    default:0
}
  
}); //MODEL METHOD is used to create a collection of a particular database of mongoDB
const userDB = mongoose.model("userdbs", Schema);
module.exports = userDB;
