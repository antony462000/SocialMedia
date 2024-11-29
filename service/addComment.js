const { Comment } = require("../models")
module.exports = async (userId,postId,comment) => {

    return await Comment.create({
        userId: userId,
        postId: postId,
        comment: comment
    })
}