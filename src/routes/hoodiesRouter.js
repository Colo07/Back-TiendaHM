// "sub rutas de cada uno de los recursos"
const express = require ('express');
const router =  express.Router();
const hoodiesController = require("../controllers/hoodiesController");

router.get ("/",hoodiesController.getHoodies );
router.get ("/:id",hoodiesController.getHoodiesById ); // las rutas principales ya las predefini
router.post ("/",hoodiesController.addHoodie);
router.put("/:id",hoodiesController.updateHoodie);
router.delete ("/:id",hoodiesController.deleteHoodie);


module.exports = router;
 