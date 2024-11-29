const { Post, PostImage, Follow, User, Comment } = require("../models")
module.exports = async (userId, followingId) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", userId, followingId)
    const publicPost = await Post.findAll({
        attributes: ["id", "caption", "likes"],
        include: [

            {
                model: User,
                as: "User",
                where: { privacy: false },
                attributes: ["id", "name", "imagePath"]
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
            }
        ],

        order: [["createdAt", "DESC"]]
    })
    console.log("::::::::::", publicPost, "&&&&&&&&&&&&&&")
    const privatePost = await Post.findAll({
        where: { userId: followingId },


        include: [
            {
                model: User,
                as: "User",
                where: { privacy: true },
                attributes: ["id", "name", "imagePath"]
            },
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
        ],


        order: [["createdAt", "DESC"]]
    })

    const alreadyPostsId = new Set();
    const allPosts = [...publicPost, ...privatePost].filter((post) => {
        if (alreadyPostsId.has(post.id)) {
            return false;
        }
        alreadyPostsId.add(post.id);
        return true;
    });

    return allPosts
}