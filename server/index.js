import express from 'express';
import { connection } from './postgres/postgres';
import router from './view/routes';

const app=express();

app.use(router)

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});

connection();