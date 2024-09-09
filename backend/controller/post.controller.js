import Post from "../model/post.model.js"
import User from "../model/user.model.js";

class PostController{
    static postPost = async(req,res)=>{
        const date = Date.call();
        try{
            let content;
            const title = req.body.posttitle?req.body.posttitle:null
            try{
                content = req.files.map((items)=>({"contents":items.filename,"contenttype":items.mimetype}));
            }catch{
    
            }
            const newPost = await Post({
                userid:req.user.id,
                title:title,
                content:content,
                date:date
            })
            
            await newPost.save();
            return res.send({"success":true,"message":"uploaded your post","importantMessage":"Share your friends with message and keep enjoy"})
        }catch(e){
            console.log(e.message)
        }
    }//end

    static getpostforuser = async(req,res)=>{
        const user = req.user._id
        const page  = 0;
        const limits = 12;
        const post = await Post.find({userid:user}).skip(page*limits).limit(limits);
        return res.send({"sucess":true,"message":"you goted your post","post":post,"user":req.user});
    }//end

    static addLike = async(req,res)=>{
        const postId = req.body.postId
        const postLiked = await Post.findById(postId);
        if(postLiked){
            const liked = postLiked.like.filter((items)=>items.id==req.user.id);
            if(liked.length==0){
                await Post.findByIdAndUpdate(postId,{$push:{like:{id:req.user.id}}})
                const UpdatedPost =await Post.findById(postId).select("like");
                console.log(UpdatedPost)
                return res.send({"success":true,"message":"liked","updatedPost":UpdatedPost})
            }else{
                return res.send({"sucess":false,"message":"already liked"})
            }
        }else{
            return res.send({"sucess":false,"message":"post not founded"})
        }
    }//end

    static removeLike = async(req,res)=>{
        const postId = req.body.postId;
        if(postId&&req.user){
            const postLiked = await Post.findById(postId);
            if(postLiked){
                const liked = postLiked.like.filter((items)=>items.id==req.user.id)
                if(liked.length!=0){
                    await Post.findByIdAndUpdate(postId,{$pull:{like:{id:req.user.id}}});
                    const UpdatedPost =await Post.findById(postId).select("like");
                    console.log(UpdatedPost)
                    return res.send({"success":true,"message":"removed","updatedPost":UpdatedPost})
                }else{
                    return res.send({"success":false,"message":"something else!"})
                }
            }else{
                return res.send({"success":false,"message":"something else!"})
            }
        }else{
            return res.send({"success":false,"message":"something else!"})
        }
    }

    static commentAdd = async(req,res)=>{
        const postId = req.body.postId;
        const commentText = req.body.message;
        const date = Date.call()
        const postFind = await Post.findById(postId)
        if(postFind){
            await Post.findByIdAndUpdate(postId,{$push:{comment:{id:req.user.id,commentText:commentText,date:date}}});
            const newComment = await Post.findById(postId);
            return res.send({"success":true,"message":"comment pushed","newComment":newComment});
        }else{
            return res.send({"success":false,"message":"something else"})
        }
    }

    static getAllPost = async(req,res)=>{
        const post = await Post.find().skip(0).limit(30);
        const users = await User.find().select("-password");
        return res.send({"post":post,"users":users})
    }//end

    
}

export default PostController;