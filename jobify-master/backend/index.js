const express=require('express')
const app=express()
const connectivity=require('./database/connectivity')
require('dotenv').config()
const auth=require('./middleware/auth')
const cors=require('cors')




//middleware
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
  res.send('hi')
})

//router
app.use('/jobify/auth/api',require('./router/authentication'))
app.use('/jobify',auth,require('./router/authorization'))
app.use('/jobify/jobs/api',auth,require('./router/job'))



const start=async ()=>{
try{
  await connectivity(process.env.connectivity)
  app.listen(process.env.PORT || 4000,()=>{
   console.log('connect')
  })
}catch{
 console.log('error')
}
}
start()