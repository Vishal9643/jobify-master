const mongoose=require('mongoose')

const connectivity=(url)=>{
 mongoose.connect(url)
}

module.exports=connectivity