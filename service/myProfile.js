const { User, Post, Comment, PostImage } = require("../models")
module.exports = async (userId) => {
    const details = await User.findOne({
        where: {
            id: userId
        },
        attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt", "password", "type"],
        },
    })

    const myPosts = await Post.findAll({
        where: { userId: userId },
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
   


    return { details, myPosts }
}