const { Follow } = require("../models")
module.exports=async (id,toUnfollowId)=>{
    return await Follow.destroy({
        where: {
            followerId: id,
            followingId: toUnfollowId,
        },
    });
}