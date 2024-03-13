require('express');
const spent=require('../Models/spent');

//create spent 
async function createSpent(req, res){
    try{
        await spent.create({
            spentNum:req.body.spentNum,
            contractorId: req.body.contractorId,
            batchId: req.body.batchId,
            spentDate: req.body.spentDate,
            spentAmount: req.body.spentAmount,
            spentTask: req.body.spentTask
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
async function listSpents(req, res){
    try{
        await spent.findAll({
            attributes:[
                'spentNum',
                'SpetDate',
                'spentAmount',
                'spentTask'
            ]
        })
    }
    catch(e){
        console.log(e)
    }
}