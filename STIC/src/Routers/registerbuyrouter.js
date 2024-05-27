const express = require('express');
const registerbuycontroller = require('../Controllers/registerbuycontroller');
const router = express.Router();
const authenticateToken = require('../middleware/middleware');

router.post('/createregisterbuy',authenticateToken, registerbuycontroller.createRegisterbuy);
router.get('/listregisterbuy',authenticateToken, registerbuycontroller.listRegisterbuy);
router.put('updateregisterbuy/:billNum',authenticateToken, registerbuycontroller.updateRegisterbuy);


module.exports=router;