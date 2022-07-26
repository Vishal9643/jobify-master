const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {
 const token = req.headers.token
 try {
  const data = jwt.verify(token, process.env.jwtsecure)
  req.user=data.id
  next()
 }catch {
 res.status(400).json({
  status: 'not authrize'
 })
}
}


module.exports = auth