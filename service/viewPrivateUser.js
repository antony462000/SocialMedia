const { User, Post, Comment, PostImage } = require("../models")
module.exports = async (userId, toFetchId) => {
    const details = await User.findOne({
        where: {
            id: toFetchId
        },
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type"],
        },
    })

    const Posts = "PRIVATE ACCOUNT"



    return { details, Posts }
}