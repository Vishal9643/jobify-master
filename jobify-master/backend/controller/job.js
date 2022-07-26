const jobs = require('../database/model/job')



const alljobs = async (req, res) => {
 try {
  const { id, name } = req.user
  const data = await jobs.find({ createby: id })
  res.status(200).json({
   data
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }
}



const singlejobs = async (req, res) => {
 const { status, jobtype } = req.query
 try {
  const data = await jobs.find({ createby: req.userid, status, jobtype })
  res.status(200).json({
   status: data
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }

}

const addjobs = async (req, res) => {
 try {
  const { id } = req.user
  await jobs.create({ ...req.body, createby: id })
  res.status(200).json({
   status: 'addjobs'
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }
}

const updatejobs = async (req, res) => {
 const { Id } = req.params
 const { id } = req.user
 try {
  const data=await jobs.findByIdAndUpdate({ _id:Id,createby: id },req.body)
  res.status(200).json({
   status: 'updatejobs',data
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }

}

const deletejobs = async (req, res) => {
 const { Id } = req.params
 const { id } = req.user
 try {
  await jobs.deleteOne({ _id: Id })
  const data = await jobs.find({ createby: id })
  res.status(200).json({
   data
  })
 } catch (err) {
  res.status(400).json({
   status: err
  })
 }
}

module.exports = { addjobs, alljobs, deletejobs, singlejobs, updatejobs }