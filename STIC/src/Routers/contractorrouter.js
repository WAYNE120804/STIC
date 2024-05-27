const express= require('express');
const contractorcontroller= require('../Controllers/contractorcontroller');
const router= express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createcontractor', authenticateToken, contractorcontroller.createContractor);
router.get('/listcontractor', authenticateToken, contractorcontroller.listContractor);
router.put('/updatecontractor/:contractorId', authenticateToken, contractorcontroller.upDateContractor);
router.put('/disablecontractor/contractorId', authenticateToken, contractorcontroller.disableContractor);
module.exports= router;