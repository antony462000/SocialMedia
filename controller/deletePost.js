const Responder = require("../responder")
const deletePost = require("../service/deletePost")
module.exports=async(req,res)=>{
    const responder = new Responder(res)
    try {
        const deletedPost = await deletePost(req.body.userId.id, req.body.postId)
        responder.success({message:"Post Deleted", payload:deletedPost})
    } catch (error) {
        responder.fail({message:"Unable to delete the Post"})
    }
}