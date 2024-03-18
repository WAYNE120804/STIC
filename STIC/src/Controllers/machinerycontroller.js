require('express');
const machinery= require('../Models/machinery');

async function createMachinery(req, res){
    try{
        await machinery.create({
            machineryName: req.body.machineryName,
            machineryState:req.body.machineryState,
            machineryAmount: req.body.machineryAmount
        }).then(function (data){
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

async function listMachineries(req, res){
    try{
        await machinery.findAll({
            attributes:[
                'machineryId',
                'machineryName',
                'machineryState',
                'machineryAmount'
            ],
            order: ['machineryName']
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
        console.log(e);
    }
}

async function updateMachinery(req, res){
    try{
        await machinery.update({
            machineryState:req.body.machineryState,
            machineryAmount: req.body.machineryAmount
        },{
            where:{machineryId: req.params.machineryId}
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

async function disableMachinery(req, res){
    try{
        await machinery.destroy({
            where:{machineryId: req.params.machineryId}
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
        console.log(e);
    }
}

module.exports={
    createMachinery,
    listMachineries,
    updateMachinery,
    disableMachinery
}