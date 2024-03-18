const {Model, DataTypes}=require('sequelize');
const connection= require('../DataBase/connection');

class spent extends Model{}

spent.init({
    spentNum:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contractorNumId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    batchId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    spentDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    spentAmount:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    spentTask:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: 'spent',
    paranoid: true,
    deletedAt:'destroyTime'
});
module.exports=spent;