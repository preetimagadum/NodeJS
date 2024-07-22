import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import empRouter from './routing/empRouter.js'

let app = express()


// read form data
app.use(express.json());
app.use(express.urlencoded({extended:true}))



dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT 
let host=process.env.HOST_NAME
//let dburl=process.env.MONGO_LOCAL_URL

app.use(morgan('dev'))

app.use("/emp",empRouter);

app.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Root Request"})
})

//connecting mongodb using moongoose
// connect to Mongo DB Database
mongoose.connect(process.env.MONGO_LOCAL_URL, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then((response) => {
    console.log("Connected to Mongo DB Successfully...........");
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});


app.listen(port,host,(err)=>{
    if(err) throw err 
    
    console.log(`Server Running! http://${host}:${port}/`)
})