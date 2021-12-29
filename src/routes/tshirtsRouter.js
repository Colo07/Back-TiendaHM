const express = require ('express');
const router =  express.Router();
const tshirtsController = require("../controllers/tshirtsController") ;

router.get ("/",tshirtsController.getTshirts ) ;
router.get ("/:id", tshirtsController.getTshirtsById);
router.post ("/",tshirtsController.addTshirt);
router.put("/:id",tshirtsController.updateTshirt);
router.delete ("/:id",tshirtsController.deleteTshirt);







module.exports = router;

