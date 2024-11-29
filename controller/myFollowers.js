
const Responder = require("../responder")
const myFollowers = require("../service/myFollowers")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const followers = await myFollowers(req.body.userId.id)
        responder.success({ message: "My  Followers ", payload: followers })
    } catch (error) {
        responder.fail({ message: "My Followers cannot be fetched" })
    }
}