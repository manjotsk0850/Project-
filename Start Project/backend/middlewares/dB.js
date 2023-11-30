const mongoose=require('mongoose')
const config=require('config')
const uri = config.get('DB_String')


exports.connectToDB=()=>{
    mongoose.connect("mongodb+srv://manjot850:manjot@cluster0.6lezwoo.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log(`Database Connected`)).catch(()=>console.log(`Error`))
}