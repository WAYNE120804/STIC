const {Model, DataType, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class tools extends Model{}

tools.init({
    toolsId: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    toolsName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    toolsAmount: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    toolsStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    warehouseId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'tools',
    paranoid: true, 
    deleteAt: 'destroyTime'
})

module.exports = tools;