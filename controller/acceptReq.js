const Responder = require("../responder")
const acceptReq = require("../service/acceptReq")
const checkFollower = require("../service/checkFollower")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        console.log(req.body.userId.id, req.body.acceptUserId)
        const isFollowing = await checkFollower(req.body.userId.id, req.body.acceptUserId)
        if (isFollowing == "PENDING") {
            const accepted = await acceptReq(req.body.userId.id, req.body.acceptUserId)
            responder.success({ message: "Successfully Updated", payload: accepted })
        } else {
            throw new Error("No Request Found")
        }

    } catch (error) {
        responder.fail(error.message)
    }
}