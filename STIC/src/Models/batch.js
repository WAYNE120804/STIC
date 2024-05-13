const {Model, DataTypes}=require('sequelize')
const connection= require('../DataBase/connection');

class batch extends Model{}

batch.init({
    batchId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    batchName:{
        type:DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    batchSize:{
        type:DataTypes.FLOAT,
        allowNull: false
    },
    batchTrees:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{
    sequelize: connection,
    modelName: 'batch',
    paranoid: true,
    deletedAt: 'destroyTime'
});
module.exports= batch;