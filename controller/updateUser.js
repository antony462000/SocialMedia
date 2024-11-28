
const Responder = require("../responder")
const updateUser = require("../service/updateUser")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        const updatedUser = await updateUser({id:req.body.userId.id,data:req.body})
        responder.success({ message: "Successfully Updated", payload: updatedUser })
    } catch (error) {
        responder.fail(error.message)
    }


}