const { Model } = require("sequelize")
const { User, Follow } = require("../models")
module.exports = async (userId, page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    return await Follow.findAll({
        where: { followerId: userId, status: "ACCEPTED" },
        attributes: ["followingId", "status"],
        include: [
            {
                model: User,
                as: "Following",
                attributes: ["id", "name", "imagePath"]
            }
        ],
        limit: pageSize,
        offset: offset
    })

}