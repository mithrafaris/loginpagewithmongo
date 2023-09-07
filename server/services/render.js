const axios = require("axios"); //allow us to make request make it easy to make request

const userDB=require("../model/model")
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
//add user
exports.home = (req, res) => {
  if(req.session.userid){
    res.render("dashboard")
  }else if(req.session.userid2){
    res.render("loginuser")
  }else{
    res.render("index")
  }
  
};

//update user
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



exports.registers = (req, res) => {
  res.render("signup",);
};
exports.dashboard = async (req, res) => {
  const { email, password } = req.body;
  const user = await userDB.findOne({ email });
  //  console.log(user);
  if (!user) {
    res.status(500).send({ message: "User not found" });
  }

  if (user.email == email && user.password == password && user.isAdmin == 1) {
    req.session.userid = user;
    // req.session.userid=user.email;
    if (req.session.userid) {
      res.render("dashboard");
    }
  }else if(user.email==email&&user.password==password&&user.isAdmin==0){
    req.session.userid2=email;
    if(req.session.userid2){
      res.render("loginuser")
    }
      
     
  
  }
   else {
    res.send({ message: "email or password is wrong" });
  }
};


exports.logout=(req,res)=>{
  req.session.destroy((err) => {
    if (err) {
      console.log(`Error found at destroy session , ERROR : ${ex.message}`);
    } else {
      console.log("Session destroyed .")
    }
    res.render('logout', { message: 'Logout Successfully' });
  })
};







