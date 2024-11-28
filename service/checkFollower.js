const { Follow } = require("../models")
module.exports = async (myId, userId) => {
    const check = await Follow.findOne({
        where: {
            followerId: userId,
            followingId: myId
        },
        attributes: ["status"]
    })
    if (!check) return check
    if (check.status == "PENDING") {
        return check.status
    }
    if (check.status == "ACCEPTED") {
        console.log("JJJJJJJJJJJJ", check.status)
        return check.status
    }
}