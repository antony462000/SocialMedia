const Responder = require("../responder")

const checkFollower = require("../service/checkFollower")
const rejectReq = require("../service/rejectReq")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        console.log(req.body.userId.id, req.body.rejectUserId)
        const isrequest = await checkFollower(req.body.userId.id, req.body.rejectUserId)
        if (isrequest == "PENDING") {
            const rejected = await rejectReq(req.body.userId.id, req.body.rejectUserId)
            responder.success({ message: "Request Rejected", payload: rejected })
        } else {
            throw new Error("No Request Found")
        }

    } catch (error) {
        responder.fail(error.message)
    }
}