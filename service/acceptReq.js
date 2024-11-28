const { Follow } = require("../models")
module.exports = async (id, acceptUserId) => {
    return await Follow.update({
        status: "ACCEPTED"
    },
        {
            where: {
                followerId: acceptUserId,
                followingId: id
            }
        })
}