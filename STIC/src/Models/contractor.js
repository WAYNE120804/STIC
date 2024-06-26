const {Model, DataTypes}=require('sequelize')
const connection= require('../DataBase/connection');

class contractor extends Model{}

contractor.init({
    contractorId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contractorNumId:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    contractorName:{
        type:DataTypes.STRING,
        unique: false,
        allowNull:false
    },
    contractorPhone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contractorAge:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    contractorAddress:{
        type:DataTypes.STRING,
        allowNull:false
    },
    farmId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    sequelize: connection,
    modelName: 'contractor',
    paranoid: true,
    deleteAT:'destroyTime'
});

module.exports=contractor;