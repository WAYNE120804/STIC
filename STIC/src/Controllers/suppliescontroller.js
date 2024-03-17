require('express');
const supplies = require('../Models/supplies');
const warehouse = require('../Models/warehouse');

async function createSupplies(req, res){
    try{
        await warehouse.create({
            suppliesName : req.body.suppliesName,
            suppliesAmount : req.body.suppliesAmount,
            presentationId: req.body.presentationId,
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

async function listSupplies(req, res){
    try{
        await warehouse.findAll({
            attributes:[
                'suppliesName',
                'suppliesAmount',
                'presentationId',

            ],
            order:  ['suppliesName'],
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

async function updateSupplies(req, res){
    try{
        await warehouse.update({
            suppliesName : req.body.suppliesName,
            suppliesAmount : req.body.suppliesAmount,
            presentationId: req.body.presentationId,
            warehouseId : req.body.warehouseId
        },{
            where:{ suppliesId: req.params.suppliesId }

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

async function disableSupplies(req, res){
    try{
        await warehouse.destroy({
            where: {suppliesId: req.params.suppliesId}
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

async function enableSupplies(req, res){
    try{
        await farm.restore({
            where: {suppliesId: req.params.suppliesId}
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
    createSupplies,
    listSupplies,
    updateSupplies,
    disableSupplies,
    enableSupplies
}