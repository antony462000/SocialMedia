
const Responder = require("../responder")
const allUsers = require("../service/allUsers")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const users = await allUsers(req.body.userId.id)
        responder.success({ message: "All users ", payload: users })
    } catch (error) {
        responder.fail({ message: "Users can not be fetched" })
    }
}