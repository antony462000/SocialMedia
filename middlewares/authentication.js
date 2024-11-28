const verifyJwt = require("../service/verifyJwt")
const Responder = require("../responder")
module.exports = (req, res, next) => {
    const responder = new Responder(res)
    try {
        const token = req.headers.token
        if (!token) throw new Error("Token Not Recieved")
        const user = verifyJwt(token)
        req.body["userId"] = user
        next()
    } catch (error) {
        responder.fail({ message: "Authentication Failed" })
    }
}