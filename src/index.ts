import express from 'express'
import http from 'http'
import { createConnection } from 'typeorm'
import 'reflect-metadata'
import bodyParser from 'body-parser'
import { userRouter } from './routers/user'

createConnection()

const app = express()

app.use(bodyParser.json())
app.use('/users', userRouter)

const server = http.createServer(app)

app.listen(3000)