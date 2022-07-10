import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    nombre:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
}); 