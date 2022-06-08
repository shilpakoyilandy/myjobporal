const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const jobSchema=new Schema(
    {
        cname:String,
        postion:String,
        place:String,
        des:String,
        image:String

        
    }
)
var jobdata=mongoose.model("job",jobSchema)
module.exports=jobdata;