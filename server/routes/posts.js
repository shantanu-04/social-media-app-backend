import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";

const router = express.Router();

// READ

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// without verify token
// router.get("/", getFeedPosts);
// router.get("/:userId/posts", getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);

// without verify token
// router.patch("/:id/like", likePost);


export default router;