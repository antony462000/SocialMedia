const { User, Post, PostImage } = require("../models")
module.exports = async (data) => {
    // console.log("::", data.userId)
    const post = await Post.create({
        userId: data.userId.id,
        caption: data.caption
    })

    console.log("kokokokokoko", post.id)
    if (Array.isArray(data.urls) && data.urls.length > 0) {
        const postedImages = data.urls.map((imagePath) => ({
            postId: post.id,
            postImagePath: imagePath
        }))
        console.log(postedImages)
        await PostImage.bulkCreate(postedImages);

    }

    return post

}