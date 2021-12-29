const express = require ('express');
const router =  express.Router();
const mugsController = require("../controllers/mugsController");


router.get ("/",mugsController.getMugs );
router.get ("/:id",mugsController.getMugsByID ); // las rutas principales ya las predefini
router.post ("/",mugsController.addMug);
router.put("/:id",mugsController.updateMug);
router.delete ("/:id",mugsController.deleteMug);


module.exports = router;

