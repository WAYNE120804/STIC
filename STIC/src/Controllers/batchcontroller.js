require('express');
const batch=require('../Models/batch')
//create batch
async function createBatch(req, res){
    try{
        await batch.create({
            batchName: req.body.batchName,
            batchSize:req.body.batchSize,
            batchTrees: req.body.batchTrees,
            farmId: req.body.farmId
        }).then(function (data){
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
async function listBatches(req, res){
    try{
        await batch.findAll({
            attributes:[
                'batchId',
                'batchName',
                'batchSize',
                'batchTrees'
            ],
            order:['batchName']
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

async function updateBatch(req, res){
    try{
        await batch.update({
            batchId: req.body.batchId,
            batchName: req.body.batchName,
            batchSize:req.body.batchSize,
            batchTrees: req.body.batchTrees  
        },{
            where:{batchId: req.params.batchId}
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
async function disableBatch(req, res){
    try{
        await batch.destroy({
            where:{batchId:req.params.batchId}
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
    createBatch,
    listBatches,
    updateBatch,
    disableBatch
}