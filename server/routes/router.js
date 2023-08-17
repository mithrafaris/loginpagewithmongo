const express=require("express");
const route=express.Router()
const servers=require('../services/render');
//this is from root route and using get method
route.get('/',servers.home);
  
route.get('/register',servers.registers);
   
route.get('/userdetails',servers.userdetail)




module.exports=route
//this is use to export route path