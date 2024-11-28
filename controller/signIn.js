
const Responder = require("../responder")
const signIn = require("../service/signIn")


module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        if (!req.body.email || !req.body.password) throw new Error("Enter email and password!");
        const user = await signIn(req.body.email, req.body.password)
        responder.success({ message: "Successfully Signed In", payload: user })
    } catch (error) {
        console.log(error)
        responder.fail(error.message)
    }


}