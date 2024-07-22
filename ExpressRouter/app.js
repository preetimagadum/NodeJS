import express from 'express'
import userRouter from './ruoting/userRouter.js'
import morgan from 'morgan'

let app = express()
app.use(morgan)