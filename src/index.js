import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./DB/DB.js";
dotenv.config({path:"./public/temp/.env"})

// Connect to MongoDB

connectDB();