const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




const setjwttoken = (id, secure) => {
 return jwt.sign({ id }, secure)
}

const sethastpassword = async (password) => {
 const salt = await bcrypt.genSalt(10)
 const hash = bcrypt.hash(password, salt)
 return hash
}

const comparepassword = (encriptpassword, enterpassword) => {
 return bcrypt.compare(enterpassword, encriptpassword)
}


module.exports={comparepassword,sethastpassword,setjwttoken}