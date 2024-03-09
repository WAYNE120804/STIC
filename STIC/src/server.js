require('./DataBase/sync.js');
const connection=require('./DataBase/connection.js');
const express=require ('express');
const app= express();
const port=process.PORT||1337;

//routers
const farmrouter = require('./Routers/farmrouter.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false})
    .then(()=>{
        console.log('Base de datos sincronizada');
        app.listen(port, ()=>{
            console.log("la aplicacion corre en el puerto: "+ port);
        })
    })
    .catch((error)=>{
        console.error('Error al sincronizar la base de datos:', error);
    });


//api
app.use('/api', farmrouter);



