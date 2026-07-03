import express from 'express';
import {startDB} from './src/config/database.js'
import movieRouter from './src/routers/movie.routes.js'

const app=express();
const PORT=3000;

app.use(express.json());
app.use("/api", movieRouter);
const main=async()=>{
    await startDB()
    app.listen(PORT,()=>{
        console.log(`Servidor: ${PORT}`)
    });
};
main();