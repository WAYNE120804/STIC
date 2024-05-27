const express= require('express');
const batchcontroller= require('../Controllers/batchcontroller');
const router= express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createbatch', authenticateToken, batchcontroller.createBatch);
router.get('/listbatches', authenticateToken, batchcontroller.listBatches);
router.put('/updatebatch/:batchId', authenticateToken, batchcontroller.updateBatch);
router.put('/disablebatch/batchId',authenticateToken, batchcontroller.disableBatch);
router.get('/getbatch/:batchId', authenticateToken, batchcontroller.getBatch);
module.exports= router;