const Responder = require("../responder")
const checkFollowing = require("../service/checkFollowing")
const unfollowUser = require("../service/unfollowUser")


module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const isFollowing = await checkFollowing(req.body.userId.id, req.body.toUnfollowUserId)
        console.log("OPOPOPOPOOPOP", isFollowing)
        if (isFollowing == "ACCEPTED") {
            const unfolloewd = unfollowUser(req.body.userId.id, req.body.toUnfollowUserId)
            responder.success({ message: "Successfully Updated", payload: unfolloewd })
        } else {
            throw new Error("NOT FOLLOWING OR REQUEST WAS NOT ACCEPTED")
        }
    } catch (error) {
        responder.fail({ message: error.message })
    }


}