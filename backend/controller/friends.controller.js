import Conversation from "../model/conversation.model.js";
import Friends from "../model/friends.model.js";
import MessagesModel from "../model/messages.model.js";

class friends{
    // start
    static req_con = async(req,res)=>{
        const findUserFriends = await Friends.findOne({userid:req.body.data});
        const findUserMy = await Friends.findOne({userid:req.user._id});

        const fuserid = findUserFriends.userid;
        const muserid = findUserMy.userid;
        
        
        
        if(findUserFriends&&findUserMy){
            const filteredHave = findUserMy.haveFriends;
            const filteredH = filteredHave.filter((items)=>items.id==fuserid)
            if(filteredH.length==0){
                await Friends.findOneAndUpdate({userid:req.body.data},{$pull:{sendedRequest:{id:muserid}}})
                await Friends.findOneAndUpdate({userid:req.user._id},{$pull:{reqFreinds:{id:fuserid}}})

                await Friends.findOneAndUpdate({userid:req.user._id},{$push:{haveFriends:{id:fuserid}}})
                await Friends.findOneAndUpdate({userid:req.body.data},{$push:{haveFriends:{id:muserid}}})
                res.send({"success":true,"message":"Friends"});
            }else{
                res.send({"success":false,"message":"already your friend"});
            }
        }
    };
    // end
    //start
    static send_req = async(req,res)=>{
        const findUserFriends = await Friends.findOne({userid:req.body.data});
        const findUserMy = await Friends.findOne({userid:req.user._id});
        const fuserid = findUserFriends.userid;
        const muserid = findUserMy.userid;
        if(findUserFriends&&findUserMy){
            const filteredSended = findUserMy.sendedRequest;
            const filteredRequest = findUserMy.reqFreinds;
            const filteredHave = findUserMy.haveFriends;
            const filteredS = filteredSended.filter((items)=>items.id==fuserid)
            const filteredR = filteredRequest.filter((items)=>items.id==fuserid)
            const filteredH = filteredHave.filter((items)=>items.id==fuserid);
            
            
            
            if(filteredS.length==0){
                if(filteredR.length==1){
                    res.send({"success":false,"message":"already have request"})
                }else{
                    if(filteredH.length==1){
                        res.send({"success":false,"message":"already your friend"});
                    }else{
                        await Friends.findOneAndUpdate({userid:req.body.data},{$push:{reqFreinds:{id:muserid}}})
                        await Friends.findOneAndUpdate({userid:req.user._id},{$push:{sendedRequest:{id:fuserid}}})
                        return res.send({"success":true,"message":"request sended"});
                    }
                }
            }
            else{
                console.log("hey")
                res.send({"success":false,"message":"already sended request"})
            }

        }else{
            return res.send({"success":false,"message":"send requiest fields"})
        }
    }
    // end
    //start
    static unfriend_req = async(req,res)=>{
        const findUserFriends = await Friends.findOne({userid:req.body.data});
        const findUserMy = await Friends.findOne({userid:req.user._id});
        const fuserid = findUserFriends.userid;
        const muserid = findUserMy.userid;
        if(findUserFriends||findUserMy){
            await Friends.findOneAndUpdate({userid:req.user._id},{$pull:{haveFriends:{id:fuserid}}})
            await Friends.findOneAndUpdate({userid:req.body.data},{$pull:{haveFriends:{id:muserid}}})
            return res.send({"success":true,"message":"Successfully unfrind"})
        }else{
            return res.send({"success":false,"message":"something wrong"})
        }
    }
    // end 
    // start
    static delete_req = async(req,res)=>{
        const findUserFriends = await Friends.findOne({userid:req.body.data});
        const findUserMy = await Friends.findOne({userid:req.user._id});
        const fuserid = findUserFriends.userid;
        const muserid = findUserMy.userid;
        if(findUserFriends&&findUserMy){
            await Friends.findOneAndUpdate({userid:req.user._id},{$pull:{reqFreinds:{id:fuserid}}})
            await Friends.findOneAndUpdate({userid:req.body.data},{$pull:{sendedRequest:{id:muserid}}})
            return res.send({"success":true,"message":"request anccepted"})
        }else{
            return res.send({"success":false,"message":"something wrong"})
        }
    }
    // end  
    
    //start
    static cencel_req = async(req,res)=>{
        const findUserFriends = await Friends.findOne({userid:req.body.data});
        const findUserMy = await Friends.findOne({userid:req.user._id});
        const fuserid = findUserFriends.userid;
        const muserid = findUserMy.userid;
        if(findUserFriends&&findUserMy){
            await Friends.findOneAndUpdate({userid:req.user._id},{$pull:{sendedRequest:{id:fuserid}}})
            await Friends.findOneAndUpdate({userid:req.body.data},{$pull:{reqFreinds:{id:muserid}}})
            return res.send({"success":true,"message":"successfully cenceled"})
        }else{
            return res.send({"success":false,"message":"something wrong"})
        }
    }
    //end
    
}


export default friends;