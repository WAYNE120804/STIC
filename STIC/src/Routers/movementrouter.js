const express=require('express');
const movementcontroller = require('../Controllers/movementcontroller');
const router=express.Router();

router.post('/createmovement', movementcontroller.createMovement);
router.get('/listmovementsactives/:machineryId', movementcontroller.listMovementsActives);
router.get('/listmovementsinactives/:machineryId', movementcontroller.listMovementsInactives);
router.put('/updatmovement/:movementId', movementcontroller.updateMovement);

module.exports=router;