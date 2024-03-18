const express = require('express');
const farmcontroller = require('../Controllers/farmcontroller');
const router = express.Router();

router.post('/createfarm', farmcontroller.createFarm);
router.get('/listfarm', farmcontroller.listFarm);
router.put('updatefarm/:farmId',farmcontroller.updateFarm);
router.put('/disablefarm/:farmId', farmcontroller.disableFarm);
router.put('/enablefarm/:farmId', farmcontroller.enableFarm);

module.exports=router;