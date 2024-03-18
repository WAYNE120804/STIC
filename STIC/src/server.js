require('./DataBase/sync.js');
const connection=require('./DataBase/connection.js');
const express=require ('express');
const app= express();
const port=process.PORT||1337;

//routers
const farmrouter = require('./Routers/farmrouter.js');
const warehouserouter = require('./Routers/warehouserouter.js');
const batchrouter=require('./Routers/batchrouter.js');
const contractorrouter=require('./Routers/contractorrouter.js');
const spentrouter=require('./Routers/spentrouter.js');
const suppliesrouter=require('./Routers/suppliesrouter.js');
const toolsrouter=require('./Routers/toolsrouter.js');
const machineryrouter=require('./Routers/machineryrouter.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, ()=>{
     console.log("la aplicacion corre en el puerto: "+ port);
})


//api
app.use('/api', farmrouter);
app.use('/api', warehouserouter);
app.use('/api',contractorrouter);
app.use('/api',batchrouter);
app.use('/api',spentrouter);
app.use('/api',suppliesrouter);
app.use('/api',toolsrouter);
app.use('/api',machineryrouter);



