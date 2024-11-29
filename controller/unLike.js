const Responder = require("../responder")
const checkLike = require("../service/checkLike")
const unLike = require("../service/unLike")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const isLiked = await checkLike(req.body.userId.id, req.body.postId)
        if (!isLiked) throw new Error("You have not  liked the post yet")
        const unLikePost = await unLike(req.body.userId.id, req.body.postId)
        responder.success({ message: "Post UnLiked ", payload: unLikePost })
    } catch (error) {

        responder.fail({ message: error.message })
    }
}