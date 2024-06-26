require('express');
const batch = require('../Models/batch');
const contractor = require('../Models/contractor');
const spent=require('../Models/spent');

//create spent 
async function createSpent(req, res){
    try{
        await spent.create({
            contractorNumId: req.body.contractorNumId,
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
            ], 
            order:['spendTask'],
            include:[{
                model: batch,
                where: {batchId: req.params.batchId},
                attributes:['batchId','batchName']
            },{
                model: contractor,
                attributes:['contractorNumId','contractorName']
            }]
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
    createSpent,
    listSpents
}