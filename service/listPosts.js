const { Op } = require("sequelize")
const { Post, PostImage, User, Comment, sequelize } = require("../models")
module.exports = async (userId, page = 1, pageSize = 5) => {


    const offset = (page - 1) * pageSize;

    const posts = await Post.findAll({
        attributes: ["id", "caption", "likes", "userId", "createdAt"],
        include: [
            {
                model: User,
                as: "User",
                attributes: ["name", "id", "imagePath"],
                where: {
                    [Op.or]: [
                        { privacy: false },
                        {
                            id: {
                                [Op.in]: sequelize.literal(
                                    `(SELECT "followingId" FROM "follows" WHERE "followerId" = ${sequelize.escape(userId)} AND "status"= 'ACCEPTED')`
                                )
                            }
                        }
                    ]
                }
            },
            {
                model: PostImage,
                as: "PostImages",
                attributes: ["postImagePath"]
            },
            {
                model: Comment,
                as: "Comments",
                attributes: ["id", "comment", "mainCommentId"],
                include: [
                    {
                        model: User,
                        as: "User",
                        attributes: ["id", "name", "imagePath"]
                    },
                ]
            }],
        order: [["createdAt", "DESC"]],
        limit: pageSize,
        offset: offset

    })

    return posts
}