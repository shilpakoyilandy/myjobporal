const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const registerSchema=new Schema(
    {
        email:String,
        password:String,
        uname:String,
        role:String

        
    }
)
var registerdata=mongoose.model("register",registerSchema)
module.exports=registerdata;