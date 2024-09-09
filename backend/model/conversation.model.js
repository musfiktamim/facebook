import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }
})


const Conversation = mongoose.model("Conversation",ConversationSchema);

export default Conversation;