import Friends from "../model/friends.model.js";
import User from "../model/user.model.js";
import Conversation from "../model/conversation.model.js";

import Message from "../model/messages.model.js";


class Messages{

    static addConversation = async(req,res)=>{
        const myUserId =  req.user.id;
        const frUserid = req.body.data;
        const isExist = await Conversation.findOne({members:{$all:[frUserid,myUserId]}});
        if(isExist){
           return res.send({"message":"member already exist","conversation":isExist})
        }else{
            const newConversation =Conversation({
                members:[myUserId,frUserid]
            })
            await newConversation.save();
            return res.send("user created")
        }
    }

    static addMessage = async (req,res)=>{

        const fulldate = Date.call();
            
        
        const conversationID = req.body.data.cnvid;
        const recieverId = req.body.data.rcvid;
        const senderId = req.user.id;
        const message = req.body.data.messages
        const findConversa = await Conversation.findById(conversationID);
        if(findConversa && conversationID){
            const newMessage = Message({
                conversationId: conversationID,
                senderId: senderId,
                recieverId: recieverId,
                message:message,
                date: fulldate
            })
            await newMessage.save();
            await Conversation.findOneAndUpdate({_id:conversationID},{$set:{message:message}})
            return res.send({success:true,message:"sended"});
        }else{
            return res.send({success:false,message:"conversation not founded"})
        }
    };

    static getMessage = async (req,res)=>{
        const findConversation = await Message.find({conversationId:req.body.data});
        if(findConversation){
            return res.send(findConversation)
        }else{
            return res.send("not founded")
        }
    }


};

export default Messages