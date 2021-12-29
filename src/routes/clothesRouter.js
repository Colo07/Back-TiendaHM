// "sub rutas de cada uno de los recursos"
const express = require ('express');
const router =  express.Router();
const clothesController = require("../controllers/clothesController");

router.get ("/",clothesController.getClothes );
router.get ("/:id",clothesController.getClothesbyId ); // las rutas principales ya las predefini
router.post ("/",clothesController.addClothe);
router.put("/:id",clothesController.updateClothes);
router.delete ("/:id",clothesController.deleteClothe);


module.exports = router;
 