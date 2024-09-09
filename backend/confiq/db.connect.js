import mongoose from "mongoose";

function db(url){
    mongoose.connect(url).then(()=>console.log(`db is connected ${url}`)).catch(e=> `db error is ${e.message}`);
}

export default db;