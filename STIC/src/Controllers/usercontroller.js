require('express')
const bcryt=require('bcrypt')
const user=require('../Models/user')
 
async function listUserRoles(req, res){
    try{
        res.json(await user.userRoles().sort())
    }
    catch(e){
        console.log(e)
    }
}

async function createUser(req, res){
    try{

        const  hashPassword= await bcryt.hash(req.body.userPassword, 10)
        await user.create({
            userIdentification: req.body.userIdentification,
            userIdentificationType: req.body.userIdentificationType,
            userName: req.body.userName,
            userPassword:hashPassword,
            userRole:req.body.userRole
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports={
    createUser,
    listUserRoles
}