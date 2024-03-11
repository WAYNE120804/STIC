const express= require('express');
const contractorcontroller= require('../Controllers/contractorcontroller');
const router= express.Router();

router.post('/createcontractor', contractorcontroller.createContractor);
router.get('/listcontractor', contractorcontroller.listContractor);
router.put('/updatecontractor/:contractorId',contractorcontroller.upDateContractor);
router.put('/disablecontractor/contractorId',contractorcontroller.disableContractor);
module.exports= router;