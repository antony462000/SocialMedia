const { Like, Post } = require("../models")
module.exports = async (userId, postId) => {
    const isExist = await Like.findOne({
        where: {
            userId: userId,
            postId: postId
        }
    })

    if (isExist) {
        await Like.update({
            isLike: true
        },
            {
                where: {
                    userId: userId,
                    postId: postId
                }
            })
    } else {
        await Like.create({
            userId: userId,
            postId: postId
        })
    }
    await Post.increment('likes', {
        by: 1,
        where: {
            id: postId
        },
    })
    return
}