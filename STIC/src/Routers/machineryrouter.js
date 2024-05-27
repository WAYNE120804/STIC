const express= require('express');
const machinerycontroller= require('../Controllers/machinerycontroller');
const router=express.Router();
const authenticateToken = require('../middleware/middleware');


router.post('/createmachinery',authenticateToken, machinerycontroller.createMachinery);
router.get('/listmachineries',authenticateToken, machinerycontroller.listMachineries);
router.put('/updatemachinery/:machineryId',authenticateToken, machinerycontroller.updateMachinery);
router.put('/disablemachinery/:machineryId',authenticateToken, machinerycontroller.disableMachinery);

module.exports=router;