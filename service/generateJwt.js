require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (user) => {

    return jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_SECRET, {
        expiresIn: 8600,
    })
};