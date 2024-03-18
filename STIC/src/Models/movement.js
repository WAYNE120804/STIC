const {Model, Datatypes}= require('sequelize');
const connection=require('../DataBase/connection');

class movement extends Model{}
movement.init({
    movementId:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    machineryId:{
        type:Datatypes.INTEGER,
        allowNull:false
    },
    contractorId:{
        type:Datatypes.INTEGER,
        allowNull:false
    },
    movementDate:{
        type: Datatypes.DATE,
        allowNull:false
    },
    movementState:{
        type: Datatypes.BOOLEAN,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'movement',
    paranoid: true,
    deletedAt: 'destroyTime'
});
module.exports= movement;