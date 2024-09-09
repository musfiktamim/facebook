import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String
    },
    date:{
        type:String,
    }
    ,
    content:[
        {
            contenttype:{type:String},
            contents:{type:String}
        }
    ],
    like:[
        {
            id:{type:String}
        }
    ],
    comment:[
        {
            id:{
                type:String
            },
            commentText:{
                type:String
            },
            commentImage:{
                type:String
            },
            date:{
                type:String,
            }
        }
    ],
    privet:{
        type:Boolean,
        default:false,
        enum:[true,false]
    }
},{ timestamps: true })


const Post = mongoose.model("Post",postSchema);

export default Post;