const express= require("express");
const prisma = require("../db/db.config");

const auth = async(req,res,next)=>{
    try {
        
        const fingerprint  = req.headers["x-fingerprint"];

        if(!fingerprint) return res.status(401).json({error:"Fingerprint required"});

        const user = await prisma.user.findUnique({
            where:{
                authId:fingerprint
            },
            select:{
                id:true,
                role:true
            }
    
        })
       
        
        if(!user) return res.status(403).json({error:"User doesn't exist"});
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({ error: "Server error" });
    }
    

}

module.exports = auth;