import dotenv from 'dotenv'; 
dotenv.config(); 

export default{
    MongoDB:{
        URLMongoUSers:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/Users?retryWrites=true&w=majority`,
        URLMongoStore:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/Sessions?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    }
}
