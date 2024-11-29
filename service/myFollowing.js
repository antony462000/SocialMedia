const { Model } = require("sequelize")
const { User, Follow } = require("../models")
module.exports = async (userId) => {
    return await Follow.findAll({
        where: { followerId: userId, status: "ACCEPTED" },
        attributes: ["followingId", "status"],
        include: [
            {
                model: User,
                as: "Following",
                attributes: ["id", "name", "imagePath"]
            }
        ]
    })
    
}