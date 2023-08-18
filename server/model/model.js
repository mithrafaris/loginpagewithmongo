const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  }
}); //MODEL METHOD is used to create a collection of a particular database of mongoDB
const userDB = mongoose.model("userDB", Schema);
module.exports = userDB;
