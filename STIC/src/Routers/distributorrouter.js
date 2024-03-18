const express = require('express');
const distributorcontroller = require('../Controllers/distributorcontroller');
const router = express.Router();

router.post('/createdistributor', distributorcontroller.createDistributor);
router.get('/listdistributor', distributorcontroller.listDistributor);
router.put('updatedistributor/:distributorId',distributorcontroller.updateDistributor);
router.put('/disabledistributor/:distributorId', distributorcontroller.disableDistributor);
router.put('/enabledistributor/:distributorId', distributorcontroller.enableDistributor);

module.exports=router;