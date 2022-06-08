const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization
        console.log("token split",token)
        const decode=jwt.verify(token,'123');
        req.userData={
            email:decode.email,
            id:decode.id
        }
        console.log("userdata :",req.userData)
        next();
    }
    catch(error){

    }
}