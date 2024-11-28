const { User, Post, PostImage } = require("../models")
module.exports = async (userId, postId) => {
    const delPost = await Post.destroy({
        where: { userId: userId, id: postId }
    })

    const delImg = await PostImage.destroy({
        where: { postId: postId }
    })

    return "Deleted"
}