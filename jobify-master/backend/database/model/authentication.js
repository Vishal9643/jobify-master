const mongoose = require('mongoose')

const playlist = new mongoose.Schema({
 name: {
  type: String,
  require: [true, 'enter the name'],
  minlength: 3,
  maxlangth: 200,
  trim:true
 },
 email: {
  unique: true,
  require: [true, 'enter the email'],
  minlength: 10,
  maxlength: 60,
  trim:true,
  type:String,
  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter valid email'],
  lowercase:true
 },
 password: {
  require: [true, 'enter the password'],
  trim:true,
  type:String
 },
 location:{
  default:'Delhi',
  type:String,
 }
})

module.exports=mongoose.model('authentication',playlist)