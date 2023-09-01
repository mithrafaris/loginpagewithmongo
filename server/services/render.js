const axios = require("axios"); //allow us to make request
exports.userdetail = (req, res) => {
  //make a get request to/api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("userdetails", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.admin = (req, res) => {
  res.render("admin");
};
exports.home = (req, res) => {
  res.render("index");
};
exports.registers = (req, res) => {
  res.render("signup");
};
exports.dashboard=(req,res)=>{
  res.render("dashboard")
}
exports.logout=(req,res)=>{
  res.render('logout', { message: 'Logout Successfully' });
}
