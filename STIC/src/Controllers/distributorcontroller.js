require('express');
const distributor = require('../Models/distributor');

//create distributor
async function createDistributor(req, res){
    try{
        await distributor.create({
            distributorName: req.body.distributorName,
            distributorPhone: req.body.distributorPhone,
            distributorAddress: req.body.distributorAddress,
            distributorEmailAddress: req.body.distributorEmailAddress
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

async function listDistributor(req, res){
    try{
        await listDistributor.findAll({
            attributes: [
                'distributorId',
                'distributorName',
                'distributorPhone',
                'distributorAddress',
                'distributorEmailAddress'
            ],
            order: ['DistributorName']
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

async function updateDistributor(req, res){
    try{
        await distributor.update({
            distributorName: req.body.distributorName,
            distributorPhone: req.body.distributorPhone,
            distributorAddress: req.body.distributorAddress,
            distributorEmailAddress: req.body.distributorEmailAddress
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

async function disableDistributor(req, res){
    try{
        await farm.destroy({
            where: {distributorId: req.params.distributorId}
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

async function enableDistributor(req, res){
    try{
        await farm.restore({
            where: {distributorId: req.params.distributorId}
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
    createDistributor,
    listDistributor,
    updateDistributor,
    disableDistributor,
    enableDistributor
}