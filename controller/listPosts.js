
const Responder = require("../responder")
const listPosts = require("../service/listPosts")
const myFollowing = require("../service/myFollowing")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        // const followingPosts = await myFollowing(req.body.userId.id)

        // const followingUsers = followingPosts.map((user) => user.Following.id)
        const myFeed = await listPosts(req.body.userId.id)
        responder.success({ message: "My  Feed ", payload: myFeed })
    } catch (error) {
        console.log(error.message)
        responder.fail({ message: "My Feed cannot be Loaded" })
    }
}