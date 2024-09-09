import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/user.model.js";
dotenv.config();
const secretKey = process.env.SECRETKEY;

async function authenticate(req,res,next){
    const { authorization } = req.headers
    if(authorization && authorization.startsWith("Bearer")){
        const token = authorization.split(" ")[1];
        const {userid} = jwt.verify(token,secretKey);
        const findUser =await User.findOne({userid:userid}).select('-password');
        if(findUser){
            req.user = findUser;
            next();
        }else{
            return res.send({"success":false,"message":"user not founded"});
        }
    }else{

        return res.send({"success":false,"message":"token not founded"});
    }
}

export default authenticate;