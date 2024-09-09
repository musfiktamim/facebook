import mongoose from "mongoose";

const friendSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    reqFreinds:{
        type:Array,
    },
    haveFriends:{
        type:Array,
    },
    sendedRequest:[
        {
            id:{type:String}
        }
    ]
},{timestamps:true})

const Friends = mongoose.model("Friends",friendSchema);
export default Friends