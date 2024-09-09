import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/userimage/");
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

export const upload = multer({storage:storage});

const contentstorage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"./public/postimage/")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

export const postContent = multer({storage:contentstorage});