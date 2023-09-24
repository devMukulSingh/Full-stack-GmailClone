import mongoose from "mongoose";
import dotenv from "dotenv";
//////////////////////////////////
dotenv.config();
const url = process.env.DATABASE;
/////////////////////////////////////

const db = async() => {
try {
    await mongoose.connect( url , { useNewUrlParser:true } );
        console.log('Connection Successful to Database');
    
} catch (error) {
        console.log(`Error in db.js ${error}`);
}
}

export default db;