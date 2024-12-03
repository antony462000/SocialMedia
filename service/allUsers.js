const { User } = require("../models")
module.exports = async (userId, page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const allUsers = await User.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type", "email", "mobile"],
        },
        limit: pageSize,
        offset: offset
    })


    return allUsers
}