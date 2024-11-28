const { User } = require("../models")
module.exports = async (userId) => {
    return await User.findOne({
        where: {
            id: userId
        },
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type"],
        },
    })
}