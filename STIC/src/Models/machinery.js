const {Model, DataTypes}= require('sequelize');
const connection=require('../DataBase/connection');

class machinery extends Model{}

machinery.init({
    machineryId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    machineryName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    machineryState:{
        type: DataTypes.STRING,
        allowNull: false
    },
    machineryAmount:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'machinery',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = machinery;