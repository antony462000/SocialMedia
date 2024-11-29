
const Responder = require("../responder")
const myFollowing = require("../service/myFollowing")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const following = await myFollowing(req.body.userId.id)
        responder.success({ message: "Following ", payload: following })
    } catch (error) {
        console.log(error.message)
        responder.fail({ message: "Following cannot be fetched" })
    }
}