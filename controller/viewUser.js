
const Responder = require("../responder")
const checkFollowing = require("../service/checkFollowing")
const findUser = require("../service/findUser")
const viewPrivateUser = require("../service/viewPrivateUser")
const viewUser = require("../service/viewUser")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const user = await findUser(req.body.toFetchId)
        isPrivate = user.privacy
        const isFollowing = await checkFollowing(req.body.userId.id, req.body.toFetchId)

        if (isPrivate == false) {

            const userProfile = await viewUser(req.body.userId.id, req.body.toFetchId)
            responder.success({ message: "User Profile ", payload: userProfile })
        }
        if (isFollowing == "ACCEPTED" && isPrivate == true) {
            
            const userProfile = await viewUser(req.body.userId.id, req.body.toFetchId)
            responder.success({ message: "User Profile ", payload: userProfile })
        }
        if (isFollowing == "PENDING") {
            
            const userProfile = await viewPrivateUser(req.body.userId.id, req.body.toFetchId)
            responder.success({ message: "User Profile ", payload: userProfile })
        }
    } catch (error) {
        console.log(error)
        responder.fail({ message: "User Details cannot be fetched" })
    }
}