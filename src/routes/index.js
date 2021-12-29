// DETERMINA LA RUTA DE CADA RECURSO
const express = require ('express');
const hoodiesRouter = require ("./hoodiesRouter");
const tshirtsRouter = require ("./tshirtsRouter");
const mugsRouter = require ("./mugsRouter");

const hoodiesController = require ("../controllers/hoodiesController");
const tshirtsController = require ("../controllers/tshirtsController");
const mugsController = require ("../controllers/mugsController")
const router = express.Router();
router.use("/hoodies",hoodiesRouter);
router.use("/tshirts",tshirtsRouter);
router.use("/mugs",mugsRouter); 
   
// router.get("/hoodies",hoodiesController.getHoodies) ;
// router.get ("/tshirts", tshirtsController.getTshirts);
// router.get ("/mugs", mugsController.getMugs);
router.get("/",hoodiesController.getHoodies) ;
// router.get ("/", tshirtsController.getTshirts);
// router.get ("/", mugsController.getMugs);
router.get("/:id",hoodiesController.getHoodiesById) ;
router.get ("/:id", tshirtsController.getTshirtsById);


module.exports=router;  