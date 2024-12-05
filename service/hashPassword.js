require("dotenv").config();
const crypto = require("crypto")
module.exports = async (password) => {
    const hash = await crypto.createHmac('sha256', process.env.PASSWORD_SECRET).update(password).digest('hex')
    return hash

}