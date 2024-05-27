const express = require('express');
const farmcontroller = require('../Controllers/farmcontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createfarm',authenticateToken, farmcontroller.createFarm);
router.get('/listfarm',authenticateToken, farmcontroller.listFarm);
router.put('updatefarm/:farmId', authenticateToken, farmcontroller.updateFarm);
router.put('/disablefarm/:farmId', authenticateToken,  farmcontroller.disableFarm);
router.put('/enablefarm/:farmId', authenticateToken, farmcontroller.enableFarm);
router.put('/getfarm/:farmId', authenticateToken, farmcontroller.getFarm );

module.exports=router;