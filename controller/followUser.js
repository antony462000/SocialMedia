const Responder = require("../responder")
const checkFollowing = require("../service/checkFollowing")
const followUser = require("../service/followUser")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const isFollowing = await checkFollowing(req.body.userId.id, req.body.toFollowUserId)
        
        if (!isFollowing) {
            const follows = await followUser(req.body.userId.id, req.body.toFollowUserId)
            responder.success({ message: "Starts Follwoling", payload: follows })
        }
        if (isFollowing == "ACCEPTED") throw new Error("Already following")
        if (isFollowing == "PENDING") throw new Error("Requested")

    } catch (error) {
        responder.fail({ message: error.message })
    }
}