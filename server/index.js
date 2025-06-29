import express from 'express';
import { connection } from './postgres/postgres';

const app=express();
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});

connection();