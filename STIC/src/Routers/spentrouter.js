const express= require('express');
const spentcontroller=require('../Controllers/spentcontroller');
const router=express.Router();

router.post('/createspent', spentcontroller.createSpent);
router.get('/listspents/:batchId', spentcontroller.listSpents);

module.exports=router;