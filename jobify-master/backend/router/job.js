const express = require('express')
const router = express.Router()
const {addjobs,alljobs,deletejobs,singlejobs,updatejobs} =require('../controller/job')


router.get('/alljobs',alljobs)

router.get('/singlejobs',singlejobs)

router.post('/addjobs',addjobs)

router.put('/updatejobs/:Id',updatejobs)

router.delete('/deletejobs/:Id',deletejobs)


module.exports = router