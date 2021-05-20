const express = require('express');
require('dotenv').config();
const cors = require('cors')
const {conectionDb} = require('./database/conf');
const app = express();

//CORS
app.use(cors());

//DB
conectionDb();

//Rutas
app.get(  '/', (req, res)=>{
    res.status(200).json({
        status: 'ok',
        msn: 'Este es un mensaje de prueba'
    });
}  );

/*
    MONGO DB US
    mean_stack
    XguwMIPSbEIjv4H3
*/

app.listen(process.env.PORT, ()=>{
    console.log(  'Activo en el puerto ' +  process.env.PORT );
});