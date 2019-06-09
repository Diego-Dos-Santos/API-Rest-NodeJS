//MongoDb y PORT 

const mongoose = require ('mongoose');
const app = require ('./app');
const config = require ('./config')


//conexión con la base de datos MONGO DB utilizando Mongoose 
mongoose.connect(config.db,{ useNewUrlParser: true }, (err, res) =>{
    if(err) {
        return console.log (`Error al conectar la base de datos: ${err} `)
    }
    console.log('conexión con la base de datos estabelecida...')

    //Npoint 
    app.listen(config.port, () => {
    console.log('listen at port' + config.port)
    })
})



