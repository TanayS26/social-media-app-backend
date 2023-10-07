import Chat from "../models/Chat.js";

/* CREATE */
export const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await Chat.findOne({
      members: { $all: [firstId, secondId] },
    });
    if (chat) {
      return res.status(201).json(chat);
    }

    const newChat = new Chat({
      members: [firstId, secondId],
    });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const findUserChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await Chat.find({
      members: { $in: [userId] },
    });
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const findChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await Chat.findOne({
        members: { $all: [firstId, secondId] },
    })
    res.status(200).json(chat);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};
