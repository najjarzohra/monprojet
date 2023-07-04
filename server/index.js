import express from'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from'cors';
import postRoutes from './routes/posts.js';  //prefix post to all get meth
import dotenv from'dotenv';
import userRoutes from './routes/users.js';

//initialse the app with expr
const app =express();
dotenv.config();




app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes); //appel route
app.use('/user',userRoutes); 


//mongodbatlas

//const CONNECTION_URL = 'mongodb+srv://projetzohra:projetzohra@cluster0.a4verys.mongodb.net/'

const PORT=process.env.PORT ||5000;
// connect monngoose m3a database 
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
     .then(()=> app.listen(PORT,()=>console.log(`Server on port:${PORT}`))) //si la connection reussite yemchi lil app
     .catch((error)=>console.log(error.message));// if not
 