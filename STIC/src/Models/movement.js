const {Model, DataTypes}= require('sequelize');
const connection=require('../DataBase/connection');

class movement extends Model{}
movement.init({
    movementId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    machineryId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    contractorId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    movementDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    movementState:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'movement',
    paranoid: true,
    deletedAt: 'destroyTime'
});
module.exports= movement;