const { User, Follow } = require("../models")
module.exports = async (userId) => {
    return await Follow.findAll({
        where: { followingId: userId, status: "ACCEPTED" },
        attributes: ["followerId", "status"],
        include: [
            {
                model: User,
                as: "Followers",
                attributes: ["id", "name", "imagePath"]
            }
        ]
    })
}