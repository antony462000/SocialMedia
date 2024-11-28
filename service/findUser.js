const { User } = require("../models")
module.exports = async (userId) => {
    return await User.findOne({
        where: {
            id: userId
        },
        attributes: ["id", "name", "privacy", "imagePath"],


    })
}