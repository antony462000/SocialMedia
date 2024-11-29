const { User, Post, PostImage } = require("../models")
module.exports = async (data) => {
    const post = await Post.create({
        userId: data.userId.id,
        caption: data.caption
    })

    if (Array.isArray(data.urls) && data.urls.length > 0) {
        const postedImages = data.urls.map((imagePath) => ({
            postId: post.id,
            postImagePath: imagePath
        }))
        await PostImage.bulkCreate(postedImages);

    }

    return post

}