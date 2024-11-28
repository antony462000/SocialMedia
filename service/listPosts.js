const { Post, PostImage, Follow, User } = require("../models")
module.exports = async (userId) => {
    const publicPost = await Post.findAll({
        include: [
            {
                model: User,
                as: "User",
                where: { privacy: false },
                attributes: ["id", "name", "imagePath"]
            }
        ],
        order: [["createdAt", "DESC"]]
    })

    const privatePost = await Post.findAll({
        include:[
            {
                model:User,
                as:"User",
                where:{privacy:true},
                attributes: ["id", "name", "imagePath"],
                include:[
                    {
                        model:Follow,
                        as:"Followers",
                        where:{followerId:userId,status:"ACCEPTED"},
                        required: true,
                    }
                ]
            }
        ],
        order: [["createdAt", "DESC"]]
    })
    const allPosts = [...publicPost,...privatePost]
    return allPosts
}