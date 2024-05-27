const express = require('express');
const warehousecontroller = require('../Controllers/warehousecontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createwarehouse',authenticateToken, warehousecontroller.createWarehouse);
router.get('/listwarehouse/:farmId',authenticateToken, warehousecontroller.listWarehouse);
router.put('/updatewarehouse/:warehouseId',authenticateToken, warehousecontroller.updateWarehouse);
router.put('/disablewarehouse/:warehouseId',authenticateToken, warehousecontroller.disableWarehouse);
router.put('/enablewarehouse/:warehouseId',authenticateToken, warehousecontroller.enableWarehouse);


module.exports=router;