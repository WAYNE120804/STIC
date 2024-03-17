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
    await connection.sync({force: false})
    .then(() => { 
        console.log('Synchronized DataBase');
    })
    .catch((error) => { 
        console.error('Error syncing DataBase' + error);
    }); 
}
sync();