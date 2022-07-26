const mongoose = require('mongoose')

const playlist = new mongoose.Schema({
 position: {
  type: String,
  required: [true, 'please provide position'],
  trim: true
 },
 company: {
  type: String,
  required: [true, 'please provide company'],
  trim: true
 },
 joblocation: {
  type: String,
  required: [true, 'please provide joblocation'],
  trim: true
 },
 status: {
  type: String,
  required: [true, 'please provide status'],
  trim: true
 },
 jobtype: {
  type: String,
  required: [true, 'please provide jobtype'],
  trim: true
 },
 createby:{
  type:mongoose.Types.ObjectId,
  required: [true, 'please provide createby'],
 }
})

module.exports=mongoose.model('jobs',playlist)