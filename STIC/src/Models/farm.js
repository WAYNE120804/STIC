const {Model, DataTypes}=require('sequelize');
const connection = require('../DataBase/connection');

class farm extends Model{}

farm.init({
    farmId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    farmName: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    villageId: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'farm',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = farm;