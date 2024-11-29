const { Like, Post } = require("../models")
module.exports = async (userId, postId) => {
    await Like.update({
        isLike: false
    },
        {
            where: {
                userId: userId,
                postId: postId
            }
        })

    await Post.decrement('likes', {
        by: 1,
        where: {
            id: postId
        },
    })
    return
}