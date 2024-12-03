const { User, Follow } = require("../models")
module.exports = async (userId, page = 1, pageSize = 10) => {

    const offset = (page - 1) * pageSize;
    return await Follow.findAll({
        where: { followingId: userId, status: "ACCEPTED" },
        attributes: ["followerId", "status"],
        include: [
            {
                model: User,
                as: "Followers",
                attributes: ["id", "name", "imagePath"]
            }
        ],
        limit: pageSize,
        offset: offset
    })
}