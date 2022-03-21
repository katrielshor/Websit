import express from "express";
import { customersRouter } from "./ctrl/controller.js";
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', customersRouter)

app.listen(3002, () => {
    console.log(3002);
})



