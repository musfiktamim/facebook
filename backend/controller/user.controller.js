import User from "../model/user.model.js";
import Friends from "../model/friends.model.js";
import bcrpt from "bcrypt";
import jwt from "jsonwebtoken";
import {v4} from "uuid"
import dotenv from "dotenv";
import fs from "fs"

dotenv.config();

const secretKey = process.env.SECRETKEY;

const soltRound = 10;
class UserController{
    // statrt
    static signup = async(req,res)=>{
        function Coverimage(){
            if(req.files['cover']){
                return req.files['cover'][0].filename;
            }else{
                return "maleuser.jpg";
            }
        }
        function Profileimage(){
            if(req.files['cover']){
                return req.files['profile'][0].filename;
            }else{
                return "maleuser.jpg";
            }
        }

        const {username,email,password,confirmpassword} = req.body;
        const ids = v4();
        if(username&&email&&password&&confirmpassword){
            if(password==confirmpassword){
                const findUser = await User.findOne({email:email});
                if(!findUser){
                    const hashPass = await bcrpt.hash(confirmpassword,10)
                    const newSaved = User({
                        username:username,
                        email:email,
                        password:hashPass,
                        userid:v4(),
                        coverimage:Coverimage(),
                        profileimage:Profileimage()
                    })
                    const hello =  await newSaved.save();
                    const savedFriendsUser = Friends({userid:hello._id});
                    await savedFriendsUser.save();
                    const payload = {
                        userid:hello.userid
                    }
                    const tokenc = jwt.sign(payload,secretKey,{expiresIn:"30d"});
                    const token = "Bearer "+tokenc;
                    return res.send({"status":200,"message":"user created","token":token,"success":true});
                }else{

                    fs.rm(`public/userimage/${req.files['cover'][0].filename}`, { recursive:true }, (err) => { 
                        if(err){ 
                            // File deletion failed 
                            console.error(err.message); 
                            return; 
                        } 
                    }) 
                    fs.rm(`public/userimage/${req.files['profile'][0].filename}`, { recursive:true }, (err) => { 
                        if(err){ 
                            // File deletion failed 
                            console.error(err.message); 
                            return; 
                        } 
                    }) 
                    return res.send({"status":200,"message":"user already exist","success":false});
                }
            }else{
                fs.rm(`public/userimage/${req.files['cover'][0].filename}`, { recursive:true }, (err) => { 
                    if(err){ 
                        // File deletion failed 
                        console.error(err.message); 
                        return; 
                    } 
                }) 
                fs.rm(`public/userimage/${req.files['profile'][0].filename}`, { recursive:true }, (err) => { 
                    if(err){ 
                        // File deletion failed 
                        console.error(err.message); 
                        return; 
                    } 
                }) 
                return res.send({"status":200,"message":"password and confirm password are't match","success":false});
            }
        }else{
            fs.rm(`public/userimage/${req.files['cover'][0].filename}`, { recursive:true }, (err) => { 
                if(err){ 
                    // File deletion failed 
                    console.error(err.message); 
                    return; 
                } 
            }) 
            fs.rm(`public/userimage/${req.files['profile'][0].filename}`, { recursive:true }, (err) => { 
                if(err){ 
                    // File deletion failed 
                    console.error(err.message); 
                    return; 
                } 
            }) 
            return res.send({"status":200,"message":"file the required feild","success":false});
        }
    }
    //emd
    //start
    static login = async(req,res)=>{
        const {email,password} = req.body;
        if(email&&password){
            const findUser =await User.findOne({email:email});
            if(findUser){
                const isPassed =await bcrpt.compare(password,findUser.password)
                if(isPassed){
                    const payload = {
                        userid:findUser.userid
                    }
                    const tokenc = jwt.sign(payload,secretKey,{expiresIn:"30d"})
                    const token = "Bearer "+tokenc
                    return res.send({"status":200,"success":true,"message":"user loged in","token":token})
                }else{
                    return res.send({"status":200,"success":false,"message":"user or password not match"})
                }
            }else{
                return res.send({"status":200,"success":false,"message":"user not found"})
            }
        }else{
            return res.send({"status":200,"success":false,"message":"file the required fields"})
        }
    }
    //end
    //start
    static people = async(req,res)=>{
        const findUser = await User.find().select("-password");
        const findUserFriends = await Friends.findOne({userid:req.user._id});
        const filated = findUser.filter((user)=>user.userid!=req.user.userid)
        return res.send({"status":200,"success":true,"message":"user loaded","users":filated,"userfreinds":findUserFriends,"user":req.user});
    }
    //end

}

export default UserController;