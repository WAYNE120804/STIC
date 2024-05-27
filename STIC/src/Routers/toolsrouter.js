const express = require('express');
const toolscontroller = require('../Controllers/toolscontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createtools',authenticateToken, toolscontroller.createTools);
router.get('/listtools/:warehouseId',authenticateToken, toolscontroller.listTools);
router.put('/updatetools/:toolsId',authenticateToken, toolscontroller.updateTools);
router.put('/disabletools/:toolsId',authenticateToken, toolscontroller.disableTools);
router.put('/enabletools/:toolsId',authenticateToken, toolscontroller.enableTools);


module.exports=router;