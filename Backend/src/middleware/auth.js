const express= require("express");
const prisma = require("../db/db.config");
const { v4: uuidv4 } = require("uuid");

const auth = async(req,res,next)=>{
   
    
      try {
        const authToken = req.cookies?.authToken; 
    
        if (!authToken) {
          const sessionToken = uuidv4();
         const newUser= await prisma.user.create({
            data:{
              role:"USER",
              authId:sessionToken,
              
            }
          })
          res.cookie("authToken", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
          });
           req.user = { id: newUser.id, role: newUser.role };
           return next();
    }

      
        const session = await prisma.user.findUnique({
          where: {
            authId:authToken
          },
          select:{
            id:true,
            role:true
          }
        });

        if (!session) {
      return res.status(400).json({error:"user not found"});
          
        }

       
        req.user = session;
        next();
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Server error" });
      }
    };

 



module.exports = auth;