const myProfile = require("../service/myProfile")
const Responder= require("../responder")
module.exports=async (req,res)=>{
    const responder=new Responder(res)
    try {
        const myDetails= await myProfile(req.body.userId.id)
        responder.success({message:"My  Details ",payload:myDetails})
    } catch (error) {
        responder.fail({message:"My Details cannot be fetched"})
    }
}