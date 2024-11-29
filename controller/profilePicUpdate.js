const Responder = require("../responder")
const profilePicUpdate = require("../service/profilePicUpdate")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
         await profilePicUpdate(req.body.url, req.body.userId.id)
        responder.success({ message: "Profile picture Updated", payload: req.body.url })
    } catch (error) {
        responder.fail({ message: "Profile picture Updation Failed" })
    }
}