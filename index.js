require("dotenv").config();
const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const PORT = process.env.PUERTO || 4000; 
const MONGO_URL= process.env.MONGO_DB_URL;

const app= express();
const router = require ("./src/routes/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(router);

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Conectado a la BD');
        app.listen({port:PORT},()=> {
            console.log (`Servidor corriendo en el puerto ${PORT}`)
        });
    }catch  (error){
        console.log(`Error: ${error}`);
        console.log ("No fue posible conectarse a la base de datos");
    }
};

connectDB(); 