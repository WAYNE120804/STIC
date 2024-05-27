const express= require('express')
const usercontroller=require('../Controllers/usercontroller')
const router= express.Router()
const authenticateToken = require('../middleware/middleware');

router.post('/createuser',authenticateToken, usercontroller.createUser)
router.get('/listuserroles',authenticateToken, usercontroller.listUserRoles)
router.post('/login',authenticateToken, usercontroller.login);

module.exports=router