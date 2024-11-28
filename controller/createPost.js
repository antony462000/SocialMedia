const createPost = require("../service/createPost")
const Responder = require("../responder")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        console.log("KKKKKKKK")
        const newPost = await createPost(req.body)
        responder.success({ message: "New Post Created", payload: newPost })
    } catch (error) {
        console.log(error.message)
        responder.fail({ message: "Post not Created" })
    }
}