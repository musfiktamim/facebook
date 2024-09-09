import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"email required for varify your account"]
    },
    password:{
        type:String,
        required:[true,"password required for your authentication"]
    },
    userid:{
        type:String,
        required:true
    },
    coverimage:{
        type:String
    },
    profileimage:{
        type:String
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;