 const {Model, Datatype, DataTypes}=require('sequelize')
 const connection=require('../DataBase/connection')

 class user extends Model{
    static userRoles(){
        return (["Administrator", "Owner", "Warehouse manager", "Contractor", "Plant worker" ])
    }
 }

 user.init({
    userId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userIdentification:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    userIdentificationType:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    userPassword:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userRole:{
        type: DataTypes.STRING,
        allowNull:false
    }
 },{
    sequelize: connection,
    modelName:'user',
    paranoid: true,
    deletedAt: 'destroyTime'
 })

 module.exports=user