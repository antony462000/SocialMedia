const { Follow } = require("../models")
module.exports = async (id, rejectUserId) => {
    return await Follow.destroy({
        where: {
            followerId: rejectUserId,
            followingId: id
        },
    });
}