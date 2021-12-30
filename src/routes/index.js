// DETERMINA LA RUTA DE CADA RECURSO
const express = require ('express');
const clothesRouter= require ("./clothesRouter");


const clothesController = require ("../controllers/clothesController");

const router = express.Router();
router.use("/clothes",clothesRouter);
  

// router.get("/clothes",clothesController.getClothes) ;
// router.get("/",clothesController.getClothes) ;



module.exports=router;  