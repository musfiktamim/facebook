//import
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./confiq/db.connect.js";
import router from "./route/index.route.js";

//app
const app = express();

//config
dotenv.config();
const port = process.env.PORT||8001;
const databaseurl = process.env.MONGO_URL;

//middleware
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

//db
db(databaseurl)

//routers

app.use(router)


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})