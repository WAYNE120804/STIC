const express = require('express');
const distributorcontroller = require('../Controllers/distributorcontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');


router.post('/createdistributor', authenticateToken, distributorcontroller.createDistributor);
router.get('/listdistributor', authenticateToken, distributorcontroller.listDistributor);
router.put('updatedistributor/:distributorId', authenticateToken,distributorcontroller.updateDistributor);
router.put('/disabledistributor/:distributorId', authenticateToken, distributorcontroller.disableDistributor);
router.put('/enabledistributor/:distributorId',authenticateToken, distributorcontroller.enableDistributor);

module.exports=router;