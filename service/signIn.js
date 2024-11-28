const { User } = require("../models")
const generateJwt = require("./generateJwt")
const hashPassword = require("./hashPassword")

module.exports = async (email, password) => {
    const hashedPassword = await hashPassword(password)
    const user = await User.findOne({
        where: {
            email: email,
            password: hashedPassword,
        },
        attributes: ["id", "privacy"]
    })
    if (!user) throw new Error("Invalid Mail or Password")
    return await generateJwt(user)
}