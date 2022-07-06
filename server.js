const express=require('express');
const dotenv = require('dotenv').config({path:'.env'});
const cors= require('cors');
const Siterouter = require('./Routes/sites.routes');
const RequestRouter = require('./Routes/request.routes');
const reviewRoutes=require('./Routes/ReviewRoutes')
const userRoutes=require('./Routes/UserRoutes')


//defining port
const PORT=process.env.PORT || '8000';

//middleware
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/*
const RequestRouter = require('./Routes/Request');
app.use('/request',RequestRouter);

const Clientrouter = require('./Routes/ClientUser');
app.use('/user',Clientrouter);

const Rolerouter=require('./Routes/Role');
app.use('/role',Rolerouter);
*/

app.use('/Images',express.static('./Images'));
app.use('/site',Siterouter);
app.use('/request',RequestRouter);
app.use('/review',reviewRoutes)
app.use('/user',userRoutes)


//listening to port 
app.listen(PORT,()=>{
    console.log(`App is running on Port : ${PORT}`);
})

