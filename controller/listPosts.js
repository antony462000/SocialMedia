
const Responder = require("../responder")
const listPosts = require("../service/listPosts")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const myFeed = await listPosts(req.body.userId.id)
        responder.success({ message: "My  Feed ", payload: myFeed })
    } catch (error) {
        console.log(error)
        responder.fail({ message: "My Feed cannot be Loaded" })
    }
}