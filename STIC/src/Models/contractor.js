const {Models, DataTypes}=require('sequelize')
const connection= require('../DataBase/connection');

class contractor extends Model{}

contractor.init({
    contractorId:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
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
    }

},{
    sequelize: connection,
    nameModel: 'contractor',
    paranoid: true,
    deleteAT:'destroyTime'
});

module.exports=contractor;