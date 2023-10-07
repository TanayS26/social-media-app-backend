import express from "express";
import { createMessage, getMessages } from "../controllers/messages.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*CREATE*/
router.post("/", verifyToken, createMessage);

/* READ ALL USER CHATS */
router.get("/:chatId", getMessages);


export default router;
