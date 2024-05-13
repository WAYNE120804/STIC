const express= require('express');
const batchcontroller= require('../Controllers/batchcontroller');
const router= express.Router();

router.post('/createbatch', batchcontroller.createBatch);
router.get('/listbatches', batchcontroller.listBatches);
router.put('/updatebatch/:batchId',batchcontroller.updateBatch);
router.put('/disablebatch/batchId',batchcontroller.disableBatch);
router.get('/getbatch/:batchId', batchcontroller.getBatch);
module.exports= router;