const express= require('express');
const machinerycontroller= require('../Controllers/machinerycontroller');
const router=express.Router();

router.post('/createmachinery', machinerycontroller.createMachinery);
router.get('/listmachineries', machinerycontroller.listMachineries);
router.put('/updatemachinery/:machineryId', machinerycontroller.updateMachinery);
router.put('/disablemachinery/:machineryId', machinerycontroller.disableMachinery);

module.exports=router;