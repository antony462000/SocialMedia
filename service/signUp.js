const { User } = require("../models")
const hashPassword = require("./hashPassword")
module.exports = async (data) => {
    const user = await User.create({
        password: await hashPassword(data.password),
        name: data.name,
        email: data.email,
        mobile: data.mob,
        imagePath: data.url,
        privacy: data.privacy
    })

    return user
}