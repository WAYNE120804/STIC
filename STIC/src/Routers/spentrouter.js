const express= require('express');
const spentcontroller=require('../Controllers/spentcontroller');
const router=express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createspent',authenticateToken, spentcontroller.createSpent);
router.get('/listspents/:batchId',authenticateToken, spentcontroller.listSpents);

module.exports=router;