require('express');
const tools = require('../Models/tools');
const warehouse = require('../Models/warehouse');

async function createTools(req, res){
    try{
        await warehouse.create({
            toolsName : req.body.toolsName,
            toolsAmount : req.body.toolsAmount,
            toolsStatus: req.body.toolsStatus,
            warehouseId : req.body.warehouseId
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }

}

async function listTools(req, res){
    try{
        await warehouse.findAll({
            attributes:[
                'toolsName',
                'toolsAmount',
                'toolsStatus',

            ],
            order:  ['toolsName'],
            include:{
                model:warehouse,
                where:{warehouseId: req.params.disableWarehouseId},
                attributes: ['warehouseName']
            }
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}

async function updateTools(req, res){
    try{
        await warehouse.update({
            toolsName : req.body.toolsName,
            toolsAmount : req.body.toolsAmount,
            toolsStatus: req.body.toolsStatus,
            warehouseId : req.body.warehouseId
        },{
            where:{ toolsId: req.params.toolsId }

        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function disableTools(req, res){
    try{
        await warehouse.destroy({
            where: {toolsId: req.params.toolsId}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })

    }
    catch(e){
        console.log(e);
    }
}

async function enableTools(req, res){
    try{
        await farm.restore({
            where: {toolsId: req.params.toolsId}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports ={
    createTools,
    listTools,
    updateTools,
    disableTools,
    enableTools
}