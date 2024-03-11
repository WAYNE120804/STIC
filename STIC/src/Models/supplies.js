const {Model, DataTypes} = require('sequelize');
const connection =require('../DataBase/connection');

class supplies extends Model{}

supplies.init({
    suppliesId: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    suppliesName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    suppliesAmount: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    presentationId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    warehouseId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'supplies',
    paranoid: true, 
    deleteAt: 'destroyTime'

})

module.exports=supplies;