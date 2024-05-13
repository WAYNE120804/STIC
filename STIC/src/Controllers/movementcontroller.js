require ('express');
const machinery = require('../Models/machinery');
const movement= require('../Models/movement');

async function createMovement(req,res){
    try{
        await movement.create({
            contractorNumId:req.body.contractorNumId,
            movementDate: req.body.movementDate,
            movementState: req.body.movementState,
            machineryId : req.body.machineryId
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
        const machinery = await Maquinaria.findByPk(req.body.machineryId);
        if (machinery) {
            machinery.machineryAmount -= 1;
            await machinery.save();
        } 
    }
    catch(e){
        console.log(e);
    }
}

async function listMovementsActives(req, res){
    try{
        await movement.findAll({
            attributes:[
                'movementId',
                'machineryId',
                'machineryName',
                'contractorNumId',
                'contractorName',
                'movementDate',
            ],
            order:['machineryName'],
            include:[{
                model: machinery,
                where: {machineryId: req.params.machineryId, movementState: true},
                attributes:['machineryId','machineryName']
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
        console.log(e);
    }
}
async function listMovementsInactives(req, res){
    try{
        await movement.findAll({
            attributes:[
                'movementId',
                'machineryId',
                'machineryName',
                'contractorNumId',
                'contractorName',
                'movementDate',
            ],
            order:['machineryName'],
            include:[{
                model: machinery,
                where: {machineryId: req.params.machineryId, movementState: false},
                attributes:['machineryId','machineryName']
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
        console.log(e);
    }
}
async function updateMovement(req, res){
    try{
        await movement.update({
            machineryId:req.body.machineryId,
            movementState: req.body.movementState
        },{
            where:{movementId:req.params.movementId}
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
    createMovement,
    listMovementsActives,
    listMovementsInactives,
    updateMovement
}