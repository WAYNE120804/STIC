const express=require('express');
const movementcontroller = require('../Controllers/movementcontroller');
const router=express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createmovement',authenticateToken, movementcontroller.createMovement);
router.get('/listmovementsactives/:machineryId',authenticateToken, movementcontroller.listMovementsActives);
router.get('/listmovementsinactives/:machineryId',authenticateToken, movementcontroller.listMovementsInactives);
router.put('/updatmovement/:movementId',authenticateToken, movementcontroller.updateMovement);

module.exports=router;