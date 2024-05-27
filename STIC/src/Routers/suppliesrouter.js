const express = require('express');
const suppliescontroller = require('../Controllers/suppliescontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');


router.post('/createsupplies',authenticateToken, suppliescontroller.createSupplies);
router.get('/listsupplies/:warehouseId',authenticateToken, suppliescontroller.listSupplies);
router.put('/updatesupplies/:suppliesId',authenticateToken, suppliescontroller.updateSupplies);
router.put('/disablesupplies/:suppliesId',authenticateToken, suppliescontroller.disableSupplies);
router.put('/enablesupplies/:suppliesId',authenticateToken, suppliescontroller.enableSupplies);


module.exports=router;