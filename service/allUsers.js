const { User } = require("../models")
module.exports = async (userId) => {
    const allUsers = await User.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type", "email", "mobile"],
        },
    })

   
    return allUsers
}