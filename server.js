const express=require('express');
const dotenv = require('dotenv').config({path:'.env'});
const cors= require('cors');

//defining port
const PORT=process.env.PORT || '8000';

//middleware
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
const Clientrouter = require('./Routes/ClientUser');
app.use('/user',Clientrouter);


//listening to port 
app.listen(PORT,()=>{
    console.log(`App is running on Port : ${PORT}`);
})

