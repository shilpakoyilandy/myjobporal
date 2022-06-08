var express=require("express")
var mernRouter=require("./src/routers/mern")
var cors=require("cors")
// const fileUpload=require("express-fileupload")
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://shilpas:resmivk@mycluster.rxjic.mongodb.net/mern?retryWrites=true&w=majority")
var app=express();
app.use(express.json())
app.use(cors())
// app.use(fileUpload())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
    });

app.use('/',mernRouter)

app.listen(8086,()=>{
    console.log("sucess")
})