const connection = require('./connection');

//Models
const farm = require('../Models/farm');
const warehouse = require('../Models/warehouse');
const contractor= require('../Models/contractor');
const batch=require('../Models/batch');
const spent= require('../Models/spent');
const supplies =require('../Models/supplies');
const tools = require('../Models/tools');

async function sync(){
    //Foreign Key batch - spent
    batch.hasMany(spent,{
        foreignKey: 'batchId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    spent.belongsTo(batch,{
        foreignKey: 'batchId'
    });

    //foreign key warehouse - farm
    farm.hasMany(warehouse,{
        foreignKey: 'farmId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    warehouse.belongsTo(farm,{
        foreignKey: 'farmId'
    });

    //foreign key supplies - warehouse
    warehouse.hasMany(supplies,{
        foreignKey: 'warehouseId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    supplies.belongsTo(warehouse,{
        foreignKey: 'warehouseId'
    });

    //foreign key tools - warehouse
    warehouse.hasMany(tools,{
        foreignKey: 'warehouseId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    tools.belongsTo(warehouse,{
        foreignKey: 'warehouseId'
    });

    //foreign key batch - farm
    farm.hasMany(batch,{
        foreignKey: 'farmId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    batch.belongsTo(farm,{
        foreignKey: 'farmId'
    });

    await connection.sync({force: false})
    .then(() => { 
        console.log('Synchronized DataBase');
    })
    .catch((error) => { 
        console.error('Error syncing DataBase' + error);
    }); 
}
sync();