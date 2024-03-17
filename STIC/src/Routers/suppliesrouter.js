const express = require('express');
const suppliescontroller = require('../Controllers/suppliescontroller');
const router = express.Router();

router.post('/createsupplies', suppliescontroller.createSupplies);
router.get('/listsupplies/:warehouseId', suppliescontroller.listSupplies);
router.put('/updatesupplies/:suppliesId', suppliescontroller.updateSupplies);
router.put('/disablesupplies/:suppliesId', suppliescontroller.disableSupplies);
router.put('/enablesupplies/:suppliesId', suppliescontroller.enableSupplies);


module.exports=router;