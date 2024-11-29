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

    const Posts = await Post.findAll({
        where: { userId: toFetchId },
        include: [
            {
                model: PostImage,
                as: "PostImages",
                attributes: ["postImagePath"]
            },
            {
                model: Comment,
                as: "Comments",
                attributes: ["id", "comment"]
            }
        ]
    })



    return { details, Posts }
}