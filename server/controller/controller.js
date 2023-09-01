var userDB=require('../model/model')
//create and save new user
exports.create=(req,res)=>{
    
    //validate request
    if(!req.body){
        res.status(404).send({message:'content can not be empty!'})
        return;
    }
    //new user
    const user= new userDB({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password
        

    })
    
    //save userin the database
    user.save(user)
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
if (req.query.id){
    const id=req.query.id;
    userDB.findById(id)
    .then(data=>{
        if(!data){
        res.status(404).send({message:`not found users with id ${id}`})
        }else{
        res.send(data)
        }
    })
    .catch(err =>{
       res.status(500).send({message:`error retriving user with ${id}`})
    })
}else{
userDB.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving user information"})
    })

    }}

///update a new identified byuser id
exports.update=(req,res)=>{
    if (!req.body){
        return res
        .status(400)
        .send({message:"data to upate can not be empty "})
    }
    const id= req.params.id;
    console.log(id);
   userDB.findByIdAndUpdate(id,req.body,{new:true})
   .then(data=>{
    if(!data){
        res.status(404).send({message:`cannot update user with ${id}.Maybe user not found!`})
    }else{
        res.send(data);   
}
})
.catch(err=>{
    res.status(500).send({message:err.message})
})

}
//delete a user with specified user id in the request
exports.delete=(req,res)=>{
    const id = req.params.id;
    userDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with id${id}.maybe id is wrong`})
        }else {
        res.send({
            message:"user was deleted successfully"
        })   //remove from database
 
}
    }).catch(err=>{
        res.status(500).send({
            message:`could not delete user with id ${id}`
        })
    })
        
}      
//url parameter and query parameter
//get single user
