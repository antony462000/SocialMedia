const { User } = require("../models")
module.exports = async (userId) => {
    const allUsers = await User.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type", "email", "mobile"],
        },
    })

    // for each user mapping to check private or not
    // allUsers.map((user) => {
    //     console.log(user.id)
    // })
    return allUsers
}