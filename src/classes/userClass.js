import mongoose from "mongoose";
import DB_CONFIG from '../dataBase/config/config'; 
import { userSchema } from "../dataBase/schema/users";

mongoose.connect(DB_CONFIG.MongoDB.URLMongoUSers,DB_CONFIG.MongoDB.options); 

export class Users{
    constructor(schema,collection){
        this.collection = mongoose.model(collection,schema); 
    }
}