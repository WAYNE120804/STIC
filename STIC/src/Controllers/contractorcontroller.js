require('express');
const contractor=require('../Models/contractor')

//Create contractor
async function createContractor(req, res){
    try{
        await contractor.create({
            contractorNumId:req.body.contractorNumId,
            contractorName: req.body.contractorName,
            contractorPhone: req.body.contractorPhone,
            contractorAge: req.body.contractorAge,
            contractorAddress:req.body.contractorAddress,
            farmId: req.body.farmId
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}
async function listContractor(req, res){
    try{
        await contractor.findAll({
            attributes:[
                'contractorName',
                'contractorAge',
                'contractorNumId',
                'contractorPhone',
                'contractorAddress'
            ],
            order:['contractorName']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e)
    }
}
async function upDateContractor(req, res){
    try{
        await contractor.upDate({
            contractorId: req.body.contractorId,
            contractorName: req.body.contractorName,
            contractorPhone: req.body.contractorPhone,
            contractorAge: req.body.contractorAge,
            contractorAddress:req.body.contractorAddress
        },{
            where:{contractorId: req.params.contractorId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e)
    {
        console.log(e)
    }
}
async function disableContractor(req, res){
    try{
        await contractor.destroy({
            where:{contractorId: req. params.contractorId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })

    }
    catch(e){
        console.log(e)
    }
}

module.exports={
    createContractor,
    listContractor,
    upDateContractor,
    disableContractor
}