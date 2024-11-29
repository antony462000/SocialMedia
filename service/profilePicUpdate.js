const { User } = require("../models")
module.exports = async (imagePath, userId) => {
    return await User.update(
        { imagePath: imagePath },
        {
            where: {
                id: userId
            }
        })
        
}