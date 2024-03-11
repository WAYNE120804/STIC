const {Model, DataTypes}=require('sequelize');
const connection= require('../DataBase/connection');

class spent extends Model{}

spent.init({
    spentNum:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    
})