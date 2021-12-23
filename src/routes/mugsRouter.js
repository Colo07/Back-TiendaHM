const express = require ('express');
const router =  express.Router();
const mugsController = require("../controllers/mugsController");
const mugs = require ("../models/mugs");


router.get ("/",mugsController.getMugs );


module.exports = router;

