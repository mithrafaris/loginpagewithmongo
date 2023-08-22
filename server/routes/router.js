const express=require("express");
const route=express.Router()
// const session = require("express-session");
// const cookieParser = require("cookie-parser");





const servers=require('../services/render');
//this is from root route and using get method
const controller=require('../controller/controller')
route.get('/',servers.home);
  
route.get('/register',servers.registers);
   
route.get('/userdetails',servers.userdetail)//add user

route.get('/update',servers.update)//update user
route.get('/admin',servers.admin)//update admin
//session 


//api 
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports=route
