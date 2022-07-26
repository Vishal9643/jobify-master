const authentication = require('../database/model/authentication')
const { comparepassword, sethastpassword, setjwttoken } = require('./logicFunction')



const login = async (req, res) => {
 const { email, password } = req.body
 const finduser = await authentication.findOne({ email })
 if (finduser) {
  const resp = await comparepassword(finduser.password, password)
  if (resp) {
   let token = setjwttoken({ id: finduser._id, name: finduser.name, email: finduser.email }, process.env.jwtsecure)
   res.status(200).json({
    status: { username: finduser.name, token }
   })
  } else {
   res.status(400).json({
    status: 'password error'
   })
  }
 } else {
  res.status(400).json({
   status: 'email error'
  })
 }
}

const register = async (req, res) => {
 const { name, email, password } = req.body
 if (!name || !email || !password) {
  res.status(400).json({
   errors: {
    email: {
     message: "Enter All The Detail"
    }
   }
  })
 }
 const finduser = await authentication.findOne({ email })
 if (finduser) {
  res.status(400).json({
   status: {
    errors: {
     email: {
      message: "Email Alredy Present"
     }
    }
   }
  })
 }
 try {
  const hash = await sethastpassword(password)
  const data = await authentication.create({ name, email, password: hash })
  if (data) {
   let token = setjwttoken({ id: data._id, name: data.name, email: data.email }, process.env.jwtsecure)
   res.status(200).json({ username: name, token })
  }
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }

}

const updateuser = async (req, res) => {
 const { name, email, newemail, location } = req.body
 try {
  await authentication.findOneAndUpdate({ email }, { name, email: newemail, location })
  res.status(200).json({
   status: 'updateuser'
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }
}



module.exports = { login, register, updateuser }