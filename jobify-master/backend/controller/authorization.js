const authorization = (req, res) => {
 try {
  const {name,email} = req.user
  res.status(200).json({
   name,email
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }
}

module.exports={authorization}