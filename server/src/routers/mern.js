var express=require ('express')
const registerdata=require('../models/register')
const mernRouter=express.Router()
const jobdata=require("../models/jobs")
 var jwt = require('jsonwebtoken');
const applyjobdata = require('../models/applyjob');
const { response } = require('express');


 mernRouter.get('/login', (req, res) => {

     res.json({log:"login"})
 })
mernRouter.post('/login', (req, res) => {
    const loginperson = {
        email: req.body.email,
        password: req.body.password,
    
    };
    console.log(loginperson)
     registerdata.findOne({ email: req.body.email }).then((signin) => {
        console.log("signin",signin);
         if (signin.password === req.body.password) {
            var token = jwt.sign({ email:signin.email,id:signin._id }, '123');
            console.log("sertkn",token)
                res.json({details:"success"
                 ,token:token,role:signin.role 
            })
           
         }
         }).catch((signin)=> {
             res.send("incorrect")
         res.json("login",{details:"incorrect login"})
         })
              
        })
        mernRouter.post('/register', (req, res) => {
                  
            const regperson = {
                uname: req.body.uname,
                email: req.body.email,
                password: req.body.password,
                role:req.body.role
        
            };
        
            console.log("regperson  : ",regperson)
            var reg = registerdata(regperson)
            reg.save().then((rgtr) => {
                // console.log(rgtr)
            })
            res.send("login")
        })

        mernRouter.post('/jobpost', (req, res) => {

            const jobposting = {
                cname: req.body.cname,
                position: req.body.position,
                place: req.body.place,
                des:req.body.des
            };

            console.log("postjob  : ",jobposting)
            var job = jobdata(jobposting)
            job.save().then((j) => {
                console.log("job",j)
            })
            res.send("login")
        })

        mernRouter.get('/jobs',(req,res)=>{
            jobdata.find()
            .then((viewjobs)=>{
                res.json(viewjobs)
            // console.log("viewjobs",viewjobs)
            })
        })

         mernRouter.post('/applyjobs/:id',(req,res)=>{
            const id=req.params.id;
           
             const  applyjob={
                username: req.body.usename,
                qualification: req.body.qualification,
                resume: req.body.resume
              }
              var appljob=applyjobdata(applyjob)
              appljob.save().then((ajob) => {
                 console.log("appljob",ajob)
            })
            res.send("login")
        })
         mernRouter.get("/empsingleview/:id",(req,res)=>{
            jobdata.findById(
                req.params.id,(error,data)=>{
                    if(error){
                        return console.log(error)
                    } else {
                        res.json(data)
                    }
                }
            )
         }
         )
         mernRouter.post("/empsingleviewupdate/:id",(req,res)=>{
             jobdata.findOneAndUpdate({_id:req.params.id},
                {
                    $set:{
                        cname:req.body.cname,
                        position:req.body.position,
                        place:req.body.place,
                        des:req.body.des
                    },
                },{new:true},(error,data)=>{
                    if (error ){
                        console.log(error)
                    } else {
                        res.json(data);
                        console.log(data)
                        console.log("data update successfully")
                    }
                })
         })

         mernRouter.delete("/deleteemp/:id",(req,res,next)=>{
             jobdata.findByIdAndRemove(req.params.id,(error,data)=>{
                 if(error){
                     return next(error)
                 } else{
                     res.status(200).json({
                         msg:data
                     })
                 }
             })
         })

module.exports=mernRouter


// app.get("/update-data/:id",(req, res) => {
//     User.findById(
//         req.params.id, (error, data) => {
//       if (error) {
//         return console.log(error);
//       } else {
//         res.json(data);
//       }
//     });
//   })