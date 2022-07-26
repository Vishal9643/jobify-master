const express = require('express')
const router = express.Router()
const {login,register, updateuser}=require('../controller/authentication')

router.post('/login',login)

router.post('/register',register)

router.put('/updateuser',updateuser)



module.exports = router