require('express');
const warehouse = require('../Models/warehouse');
const farm = require('../Models/farm');

async function createWarehouse(req, res){
    try{
        await warehouse.create({
            warehouseName : req.body.productName,
            warehouseSize : req.body.productDescription,
            farmId : req.body.restaurantId
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

async function listWarehouse(req, res){
    try{
        await warehouse.findAll({
            attributes:[
                'warehouseId',
                'warehouseName',
                'warehouseSize'
            ],
            order:  ['warehouseName'],
            include:{
                model:farm,
                where:{farmId: req.params.farmId},
                attributes: ['farmName']
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

async function updateWarehouse(req, res){
    try{
        await warehouse.update({
            warehouseName : req.body.productName,
            warehouseSize : req.body.productDescription,
            farmId : req.body.restaurantId
        },{
            where:{ warehouseId: req.params.warehouseId }

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

async function disableWarehouse(req, res){
    try{
        await warehouse.destroy({
            where: {warehouseId: req.params.warehouseId}
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

async function enableWarehouse(req, res){
    try{
        await farm.restore({
            where: {warehouseId: req.params.warehouseId}
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
    createWarehouse,
    listWarehouse,
    updateWarehouse,
    disableWarehouse,
    enableWarehouse
}