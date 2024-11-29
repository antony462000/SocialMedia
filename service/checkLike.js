const { Like } = require("../models")
module.exports = async (userId, postId) => {
    return await Like.findOne({
        where: {
            userId: userId,
            postId: postId,
            isLike:true
        }
    })
}