const express= require('express')
const usercontroller=require('../Controllers/usercontroller')
const router= express.Router()

router.post('/createuser', usercontroller.createUser)
router.get('/listuserroles', usercontroller.listUserRoles)

module.exports=router