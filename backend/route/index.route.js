import express from "express"
import Index from "../controller/index.controller.js";
import Feeds from "../controller/feeds.controller.js";
import UserController from "../controller/user.controller.js";
import authenticate from "../middleware/authenticate.middleware.js";
import friends from "../controller/friends.controller.js";
import PostController from "../controller/post.controller.js";
import {upload,postContent} from "../middleware/upload.middleware.js"
import Messages from "../controller/messages.controller.js";

const router = express.Router();

router.get("/feeds",Feeds.feeds);
router.post("/signup",upload.fields([{name:"cover"},{name:"profile"}]),UserController.signup);
router.post("/login",UserController.login);
router.get("/people",authenticate,UserController.people);

router.post("/req_con",authenticate,friends.req_con);
router.post("/send_req",authenticate,friends.send_req);
router.post("/delete_req",authenticate,friends.delete_req);
router.post("/unfriend_req",authenticate,friends.unfriend_req);
router.post("/cencel_req",authenticate,friends.cencel_req);


router.post("/postPost",postContent.array("content"),authenticate,PostController.postPost);
router.post("/getallpost",authenticate,PostController.getAllPost)
router.post("/getpostforuser",authenticate,PostController.getpostforuser)

router.post("/like/add",authenticate,PostController.addLike)
router.post("/like/remove",authenticate,PostController.removeLike)

router.post("/comment/add",authenticate,PostController.commentAdd)


router.post("/conversation/add",authenticate,Messages.addConversation)

router.post("/addmessage",authenticate,Messages.addMessage);
router.post("/getmessage",authenticate,Messages.getMessage);


export default router;