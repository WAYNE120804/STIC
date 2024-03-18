const {Model, Datatypes}= require('sequelize');
const connection=require('../DataBase/connection');

class machinery extends Model{}

machinery.init({
    machineryId:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    machineryName:{
        type: Datatypes.STRING,
        allowNull: false
    },
    machineryState:{
        type: Datatypes.STRING,
        allowNull: false
    },
    machineryAmount:{
        type: Datatypes.INTEGER,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'machinery',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = machinery;