var userDB=require('../model/model')
//create and save new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:'content can not be empty!'})
        return;
    }
    //new user
    const user= new userDB({
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        Gender:req.body.gender,
        emailid:req.body.email,
        password:req.body.password,
        isAdmin:0

    })
    //save userin the database
    user.save()
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"some error occured while creating a create operation"
        })
    })


}
//retrive and return all user/retrive and return a single user
exports.find=(req,res)=>{

} 
//update a new identified byuser id
exports.update=(req,res)=>{

}
//delete a user with specified user id in the request
exports.delete=(req,res)=>{
    //remove from database
}