const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class registerbuy extends Model {}

registerbuy.init({
    billNum: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    registerbuyAmount: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    registerbuyAcquisitionDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    registerbuyDateEntry: {
        type: DataTypes.DATE,
        allowNull: false
    },
    suppliesId: {
        type: DataTypes.INTEGER,
        primaryKey:true,

    },
    distributorId: {
        type: DataTypes.INTEGER,
        primaryKey:true,

    }
    
},{
    sequelize: connection,
    modelName: 'registerbuy',
    paranoid: true,
    deletedAt:'destroyTime'
});

module.exports = registerbuy;