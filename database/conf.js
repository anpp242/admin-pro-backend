const mongoose = require( 'mongoose' );
require( 'dotenv' ).config();
const conectionDb = async ()=>{
    try {
        await mongoose.connect( process.env.DB_CNN , 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log( 'DB OnLine' );
    } catch (error) {
        console.log(  error  );
        throw new Error( 'Error en la conexión de la BD, verificar los logs' )
    }
}

module.exports = { conectionDb }