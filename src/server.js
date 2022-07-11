import express from 'express'; 
import morgan from 'morgan';
import session from 'express-session';
import dotenv from 'dotenv'; 
import MongoStore from 'connect-mongo';
import passport from 'passport';
import DB_CONFIG from './dataBase/config/config'; 
import routePrincipal from './routers/home'; 
import routesRegistro from './routers/signUp';
import routesLogin from './routers/login'; 
import './passport/local'; 
import './dataBase/dataBase'; 


dotenv.config(); 

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(express.static(__dirname + '/public')); 
app.use(session({
    store:MongoStore.create({
        mongoUrl:DB_CONFIG.MongoDB.URLMongoStore,
        mongoOptions:DB_CONFIG.MongoDB.options,
        ttl:600
    }),
    secret:'secret',
    resave:false,
    saveUninitialized:false
})); 
app.use(passport.session()) 
app.use(passport.initialize());

app.use('/',routePrincipal);
app.use('/registro',routesRegistro); 
app.use('/login',routesLogin); 


const PORT = process.env.PORT;

const server = app.listen(PORT ,() => {
    console.log(`Server on port ${server.address().port}`);
}); 

