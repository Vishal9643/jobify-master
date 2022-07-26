const express = require('express')
const router = express.Router()
const {authorization}=require('../controller/authorization')

router.get('/authorization',authorization)



module.exports = router