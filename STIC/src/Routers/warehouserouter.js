const express = require('express');
const warehousecontroller = require('../Controllers/warehousecontroller');
const router = express.Router();

router.post('/createwarehouse', warehousecontroller.createWarehouse);
router.get('/listwarehouse/:farmId', warehousecontroller.listWarehouse);
router.put('/updatewarehouse/:warehouseId', warehousecontroller.updateWarehouse);
router.put('/disablewarehouse/:warehouseId', warehousecontroller.disableWarehouse);
router.put('/enablewarehouse/:warehouseId', warehousecontroller.enableWarehouse);


module.exports=router;