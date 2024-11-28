const acceptReq = require("./controller/acceptReq");
const allusers = require("./controller/allusers");
const createPost = require("./controller/createPost");
const deletePost = require("./controller/deletePost");
const followUser = require("./controller/followUser");
const listPosts = require("./controller/listPosts");
const myProfile = require("./controller/myProfile");
const profilePicUpdate = require("./controller/profilePicUpdate");
const rejectReq = require("./controller/rejectReq");
const signIn = require("./controller/signIn");
const signUp = require("./controller/signUp");
const unFollowUser = require("./controller/unFollowUser");
const updateUser = require("./controller/updateUser");
const authentication = require("./middlewares/authentication");
const fileupload = require("./middlewares/fileupload");
const proPicUpdate = require("./middlewares/proPicUpdate");

const router = require("express").Router();

router.post("/signUp", fileupload("single", "image"), signUp)
router.get("/signIn", signIn)
router.get("/myProfile", authentication, myProfile)
router.get("/allUsers", authentication, allusers)
router.patch("/updateuser", authentication, updateUser)
router.post("/createpost", authentication, fileupload("multiple", "images", 10), createPost)
router.patch("/updateProfilePic", authentication, proPicUpdate, profilePicUpdate)
router.delete("/deletePost", authentication, deletePost)
router.post("/followUser", authentication, followUser)
router.delete("/unfollow", authentication, unFollowUser)
router.patch("/acceptRequest", authentication, acceptReq)
router.delete("/rejectRequest",authentication,rejectReq)
router.get("/myfeed",authentication,listPosts)
module.exports = router