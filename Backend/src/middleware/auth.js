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
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
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
       
       
        res.status(500).json({ error: "Server error",err:error.message });
      }
    };
const isAdmin = async (req, res, next) => {
  try {
     const authToken = req.cookies?.authToken; 
       
        if(!authToken) return res.json({error:"no token"});
    const session = await prisma.user.findUnique({
      where: {
        authId: authToken,
      },
      select: {
        id: true,
        role: true,
      },
    });
    req.user = session;
    
    const userRole = req.user?.role;

    // Check if the user is an admin
    if (userRole === "ADMIN") {
      return next(); // Allow access
    }

   
    return res
      .status(412)
      .json({ error: "Access denied. Admin privileges required.",status:412 });
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {isAdmin,auth};
