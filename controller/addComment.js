const Responder = require("../responder")
const addComment = require("../service/addComment")
const addCommentReply = require("../service/addCommentReply")


module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        if (!req.body.comment) throw new Error("Please add a comment")
        if (!req.body.commentId) {
            const comment = await addComment(req.body.userId.id, req.body.postId, req.body.comment)
            responder.success({ message: "Comment Added", payload: comment.comment })
        }
        if (req.body.commentId) {
            const commentReply = await addCommentReply(req.body.userId.id, req.body)
            responder.success({ message: " Comment Reply Added", payload: commentReply })
        }
    } catch (error) {
        responder.fail(error.message)
    }
}