import Message from "../models/Message.js";

/*CREATE MESSAGE*/

export const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const newMessage = new Message({
    chatId,
    senderId,
    text,
  });

  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.find({
      chatId,
    });
    res.status(200).json(messages)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
