// import require
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productData = require('./models/Products')

const ProductController=require('./controller/ProductController')

const dB=require('./middlewares/db')

const productRoutes=require('./routes/ProductRoutes')

 
// const { MongoClient, ServerApiVersion } = require('mongodb');



app.use(express.json());
dB.connectToDB();

//bookRoutes
app.use('/products', productRoutes)

// mongoose.connect("mongodb+srv://manjotsingh096:manjotatmongodb@cluster0.fksc4av.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=> console.log(`Database connected`)).catch(()=>console.log(`Error`))
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


app.get('/',(req, res)=>{
    res.send(`Hello I am G2`)
})

app.get('/home',(req,res)=>{
    res.home(`homepage of G2`)
})

app.get('/home/about',(req,res)=>{
    res.home(`homepage of G2 About page`)
})

app.get('/c',(req,res)=>{
    res.send(`hi c here`)
})

app.post('/bookregister',(req,res)=>{
    const inputData=req.body
    // console.log('inputData',inputData);
    const createData=BookData.create(inputData)
    res.status(202).json(inputData)
})

app.post('/register',(req,res)=>{
    const inputData=req.body
    // console.log('inputData',inputData);
    const createData=userData.create(inputData)
    res.status(201).json(inputData)
})

app.get('/hello',(req,res)=>{
    res.send('Hello I am app.get after Listen')
})

app.listen(9600,()=>{
    console.log(`server is started in 9600`);
})
