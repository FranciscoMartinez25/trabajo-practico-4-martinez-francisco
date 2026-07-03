import express from 'express';
import {startDB} from './src/config/database.js'

const app=express();
const PORT=3000;

app.use(express.json());

const main=async()=>{
    await startDB()
    app.listen(PORT,()=>{
        console.log(`Servidor: ${PORT}`)
    });
};
main();