import mongoose from "mongoose";
import DB_CONFIG from './config/config'

mongoose.connect(DB_CONFIG.MongoDB.URLMongoUSers,DB_CONFIG.MongoDB.options)
.then(res => console.log('DB Connected'))
.catch(err => console.log(err)); 