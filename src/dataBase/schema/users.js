import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre:{type:String},
    email:{type:String},
    password:{type:String},
    facebookId:{type:String}
}); 

export default mongoose.model('users',userSchema);