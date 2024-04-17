const express = require('express');
const router = express.Router()
const createProduct=require('../controller/createProduct');
const createService=require('../controller/createService')

router.post('/createproduct',createProduct);
router.post('/createservice',createService);


module.exports=router;