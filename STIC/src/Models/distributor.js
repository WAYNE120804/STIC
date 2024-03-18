const {Model, DataTypes}=require('sequelize');
const connection=require('../DataBase/connection');

class distributor extends Model{}

distributor.init({
    distributorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    distributorName:{
        type:DataTypes.STRING,
        unique: false,
        allowNull:false
    },
    distributorPhone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    distributorAddress: {
        type:DataTypes.STRING,
        allowNull:false
    },
    distributorEmailAddress: {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'distributor',
    paranoid: true,
    deletedAt:'destroyTime'
});

module.exports=distributor;