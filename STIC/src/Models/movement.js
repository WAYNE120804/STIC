const {Model, Datatypes}= require('sequelize');
const connection=require('../DataBase/connection');

class movement extends Model{}
movement.init({
    movementId:{
        type: Datatypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    
})