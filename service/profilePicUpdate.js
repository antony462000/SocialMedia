const { User } = require("../models")
module.exports = async (imagePath, userId) => {
    await User.update(
        { imagePath: imagePath },
        {
            where: {
                id: userId
            }
        })
}