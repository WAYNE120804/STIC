require('express');
const farm = require('../Models/farm');

//create farm
async function createFarm(req, res){
    try{
        await farm.create({
            farmName: req.body.farmName,
            villageId: req.body.villageId

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

async function listFarm(req, res){
    try{
        await listFarm.findAll({
            attributes: [
                'farmId',
                'farmName',
                'villageId'
            ],
            order: ['farmName']
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

async function updateFarm(req, res){
    try{
        await farm.update({
            farmName: req.body.farmName,
            villageId: req.body.villageId
        },{
            where:{ farmId: req.params.farmId }

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

async function disableFarm(req, res){
    try{
        await farm.destroy({
            where: {farmId: req.params.farmId}
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

async function enableFarm(req, res){
    try{
        await farm.restore({
            where: {farmId: req.params.farmId}
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



module.exports={
    createFarm,
    listFarm,
    updateFarm,
    disableFarm,
    enableFarm
}