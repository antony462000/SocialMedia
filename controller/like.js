const Responder = require("../responder")
const checkLike = require("../service/checkLike")
const like = require("../service/like")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const isLiked = await checkLike(req.body.userId.id, req.body.postId)
        if (isLiked) throw new Error("Already liked")
        const likedPost = await like(req.body.userId.id, req.body.postId)
        responder.success({ message: "Post Liked ", payload: likedPost })
    } catch (error) {

        responder.fail({ message: error.message })
    }
}