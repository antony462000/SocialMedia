const { Comment } = require("../models")
module.exports = async (userId, data) => {

    return await Comment.create({
        userId: userId,
        postId: data.postId,
        comment: data.comment,
        mainCommentId: data.commentId
    })
}