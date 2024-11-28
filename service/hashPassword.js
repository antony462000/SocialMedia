const crypto = require("crypto")
module.exports = async (password) => {
    console.log(typeof (password))
    const hash = await crypto.createHmac('sha256', 'socialmediapassword').update(password).digest('hex')
    console.log(hash);
    return hash

}