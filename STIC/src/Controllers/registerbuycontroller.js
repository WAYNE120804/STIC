require('express');
const distributor = require('../Models/distributor');
const registerbuy=require('../Models/registerbuy');

//create distributor
async function createRegisterbuy(req, res){
    try{
        await registerbuy.create({
            billNum: req.body.billNum,
            registerbuyAmount: req.body.registerbuyAmount,
            registerbuyAcquisitionDate: req.body.registerbuyAcquisitionDate,
            registerbuyDateEntry: req.body.registerbuyDateEntry,
            suppliesId: req.body.suppliesId,
            distributorId: req.body.distributorId

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

async function listRegisterbuy(req, res){
    try{
        await listRegisterbuy.findAll({
            attributes: [
                'billNum',
                'registerbuyAmount',
                'registerbuyAcquisitionDate',
                'registerbuyDateEntry',
                'suppliesId',
                'distributorId'
            ],
            order: ['billNum']
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

async function updateRegisterbuy(req, res){
    try{
        await distributor.update({
            billNum: req.body.billNum,
            registerbuyAmount: req.body.registerbuyAmount,
            registerbuyAcquisitionDate: req.body.registerbuyAcquisitionDate,
            registerbuyDateEntry: req.body.registerbuyDateEntry,
            suppliesId: req.body.suppliesId,
            distributorId: req.body.distributorId
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
    createRegisterbuy,
    listRegisterbuy,
    updateRegisterbuy
}