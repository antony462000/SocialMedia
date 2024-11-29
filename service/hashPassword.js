const crypto = require("crypto")
module.exports = async (password) => {
    const hash = await crypto.createHmac('sha256', 'socialmediapassword').update(password).digest('hex')
    return hash

}