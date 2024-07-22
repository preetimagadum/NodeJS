
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import appRouter from './router/appRouter.js'
//create express app 
let app = express();

//to read form data/post man data - enable express json
app.use(express.json());

app.use(morgan('dev'))

dotenv.config({path:"./config/dev.config"})

let port = process.env.PORT 
let hostname = process.env.HOST_NAME

//create root request 
app.get("/",(req,resp)=>{
    resp.json({"msg":"Root Request"})
})

app.use("/emp",appRouter);
//create and listen server -app
app.listen(port,hostname,(err)=>{
    if(err) 
        throw err 
    console.log("Server Running http://${hostname}:${port}/")
})