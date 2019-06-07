const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
//conexión con el Product Schema 
const Product = require ('./models/product');

const app = express();
const port = process.env.PORT || 3000;

// BodyParser 

app.use(bodyParser.urlencoded({extended: false}))   
app.use(bodyParser.json())

app.use(express.json());

//petición GET de la tienda online
app.get('/api/product', (req, res) => {
    Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: `Ese producto no existe`})

    res.status(200).send({products})
    })
})

app.get('/api/product/:productId', (req,res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!product) return res.status(404).send({message:`El producto no existe`})
        
        res.status(200).send({ product })
    })
})

//petición POST de la tienda online 
app.post('/api/product', (req, res) => {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.image = req.body.image
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    //Armacenamiento en la base de datos
    product.save((err, productStored) =>{
        if(err) res.status(500).send({message:`Error al salvar en la base de datos ${err}`})

        res.status(200).send({product: productStored})
    })
})

//petición PUT de la tienda online 
app.put('/api/:productId', (req,res) => {

})

//petición DELETE de la tienda  online
app.delete('/api/product/:productId', (req,res) => {

})




//conexión con la base de datos MONGO DB utilizando Mongoose 
mongoose.connect('mongodb://localhost:27017/shop', (err, res) =>{
    if(err) {
        return console.log (`Error al conectar la base de datos: ${err} `)
    }
    console.log('conexión con la base de datos estabelecida...')

    //Npoint 
    app.listen(port, () =>{
    console.log('listen at port' + port);
    })
})



