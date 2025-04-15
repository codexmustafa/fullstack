import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
   mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('connected to Mongo DB')
    })
    .catch((err)=>{
        console.log(err, 'Error in connecting DB')
    })
}

export default db;