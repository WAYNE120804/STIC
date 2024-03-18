const express = require('express');
const registerbuycontroller = require('../Controllers/registerbuycontroller');
const router = express.Router();

router.post('/createregisterbuy', registerbuycontroller.createRegisterbuy);
router.get('/listregisterbuy', registerbuycontroller.listRegisterbuy);
router.put('updateregisterbuy/:billNum',registerbuycontroller.updateRegisterbuy);


module.exports=router;