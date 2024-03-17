const express = require('express');
const toolscontroller = require('../Controllers/toolscontroller');
const router = express.Router();

router.post('/createtools', toolscontroller.createTools);
router.get('/listtools/:warehouseId', toolscontroller.listTools);
router.put('/updatetools/:toolsId', toolscontroller.updateTools);
router.put('/disabletools/:toolsId', toolscontroller.disableTools);
router.put('/enabletools/:toolsId', toolscontroller.enableTools);


module.exports=router;