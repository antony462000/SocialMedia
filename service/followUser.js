const { Follow } = require("../models")

const findUser = require("./findUser")
module.exports = async (id, toFollowUserId) => {
    const toFollow = await findUser(toFollowUserId)
    console.log("<<<<<<<<<<<", toFollow.privacy, "<<<<<<<<<<<<<")
    if (toFollow.privacy === false) {
        console.log(":::::::::::::::::::::::::::")
        return await Follow.create({
            followerId: id,
            followingId: toFollowUserId,
            status: "ACCEPTED"
        })
    } else {
        return await Follow.create({
            followerId: id,
            followingId: toFollowUserId,

        })
    }
}