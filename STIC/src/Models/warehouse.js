const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class warehouse extends Model{}

warehouse.init({
    warehouseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    warehouseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warehouseSize: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farmId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'warehouse',
    paranoid: true, 
    deleteAt: 'destroyTime'
})

module.exports = warehouse;