const axios=require('axios')//allow us to make request
exports.userdetail=(req,res)=>{
    //make a get request to/api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response);
        res.render('userdetails',{users:response.data})
}).catch(err=>{
    res.send(err)
})
}

exports.update=(req,res)=>{
    res.render('update')
}
exports.admin=(req,res)=>{
    res.render('admin')
}
exports.home=(req,res)=>{
    res.render('index')
}
exports.registers=(req,res)=>{
    res.render('signup')
}