import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  conversationId: { type: String },
  senderId: { type: String },
  recieverId: { type: String },
  message: { type: String },
  date:{type:String}

},
  { timestamps: true }
)

const Message = mongoose.model("Message", messageSchema)
export default Message