const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const applyjobSchema=new Schema(
    {
        username:String,
        qualification:String,
        resume:String


        
    }
)
var applyjobdata=mongoose.model("applyjob",applyjobSchema)
module.exports=applyjobdata;