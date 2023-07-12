import express from 'express';
import ViteExpress from 'vite-express';
import tipRouter from './routers/tipRouter.js';
import 'dotenv/config.js';
import mongoose from "mongoose";
import cors from 'cors';

const app = express(); 
app.use(express.json());
app.use(cors());
app.use('/tip', tipRouter);
const port = 3000;

app.use('/tip', tipRouter);

const connect = async () => {
    try{
        await mongoose.connect(process.env.VITE_MONGO_CONNECT);
        ViteExpress.listen(app, port, () =>{
            console.log(`Listening on port ${port}`);
        });
    } catch (err){
        console.error(err);
    }
}

connect();


