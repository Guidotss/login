import mongoose from "mongoose";
import bcrypt, { genSaltSync } from "bcrypt";

const userSchema = new mongoose.Schema({
    nombre:{type:String},
    email:{type:String},
    password:{type:String},
    facebookId:{type:String},
    twitterId:{type:String}
}); 

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password,genSaltSync(10)); 
}
userSchema.methods.comparePassword = (password,passwordDB) => {
    return bcrypt.compareSync(password,passwordDB);
};



export default mongoose.model('users',userSchema);