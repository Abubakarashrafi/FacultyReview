const prisma = require(".././db/db.config");


const createUser = async(req,res) => {
    try {
        const {fingerprint} = req.body;
        
        if(!fingerprint) return res.status(400).json({error:"fingerprint required"});
    
        let user = await prisma.user.findUnique({
            where:{
                authId:fingerprint 
            }
        })
       
        if(!user){
            user = await prisma.user.create({
                data:{
                    
                    authId:fingerprint
                }
            }) 
        } 
        return res.status(200).json({userId:user.id,role:user.role})
    } catch (error) {
        return res.status(500).json({error:"server error"});
    }
}


const getUserReview = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(400).json({ msg: "user id is missing" });

   

    if (!teacherReviews)
      return res.status(400).json({ msg: "review doesn't exist" });
    return res.status(200).json({ teacherReviews });
  } catch (error) {
   
    return res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = {createUser,getUserReview};