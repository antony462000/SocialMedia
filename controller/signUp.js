const signUp = require("../service/signUp")
const Responder = require("../responder")
const findByKey = require("../service/findByKey")
module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {

        if (!req.body.name || !req.body.password || !req.body.email || !req.body.mob) {
            throw new Error("Enter all Details!");
        }
        const userExists = await findByKey(req.body.mob, req.body.email)
        if (userExists) throw new Error("Email or mobile already exist");
        const createdUser = await signUp(req.body)
        
        responder.success({ message: "Successfully Signedup", payload: createdUser })
    } catch (error) {
        console.log(error)
        responder.fail(error.message)
    }
}