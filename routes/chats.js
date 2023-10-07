import express from "express";
import { createChat, findChat, findUserChats } from "../controllers/chats.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*CREATE*/
router.post("/", verifyToken, createChat);

/* READ ALL USER CHATS */
router.get("/:userId", findUserChats);

/* READ SINGLE CHAT*/
router.get("/find/:firstId/:secondId", findChat);

export default router;
