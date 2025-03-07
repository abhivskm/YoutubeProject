import mongoose from "mongoose";
import { DB_Name } from "../contant.js";
import dotenv from "dotenv";

dotenv.config({path:"./public/temp/.env"})

const connectDB = async () => {
    try {
      const connectionInstance =  await mongoose.connect
      (`${process.env.DB_url}/${DB_Name}`);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to", error);
        process.exit(1);
    }
}
export default connectDB;