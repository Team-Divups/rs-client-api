const express= require('express');
const pool = require('../Database/database');
const Clientrouter = express.Router();


//get all
Clientrouter.get('/',(req,res)=>{
    const sqlQuery = 'SELECT * FROM client_user';
    pool.query(sqlQuery,(err,rows,fields)=>{
        if(!err)
        {
            console.log(rows);
            res.status(200).json(rows);
        }
        else{
            console.log(err);
            res.status(400).send(err.message);
        }
    })
})


//get a specific user
Clientrouter.get('/:id',(req,res)=>{
    const sqlQuery = 'SELECT * FROM client_user where id=? ';
    pool.query(sqlQuery,req.params.id,(err,rows,fields)=>{
        if(!err)
        {
            console.log(rows);
            res.status(200).json(rows);
        }
        else{
            console.log(err);
            res.status(400).send(err.message);
        }
    })
})



//create a new  user
Clientrouter.post('/create',(req,res)=>{
    try {
        const firstname = req.body.firstname;
        const lastName = req.body.lastName;
        const position=req.body.position;
        const id_clientRole=req.body.id_clientRole;
        const email=req.body.email;
        const companyId= req.body.companyId;
        const subId = req.body.subId;

        const sqlQuery='INSERT INTO client_user (firstname,lastName,position,id_clientRole,email,companyId,subId) VALUES (?,?,?,?,?,?,?)';
        const row=pool.query(sqlQuery,[firstname,lastName,position,id_clientRole,email,companyId,subId]);
        
        res.status(200).send({message:'user added'})
            
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})



//delete a specific user
Clientrouter.delete('/delete/:id',(req,res)=>{
    try {
        const sqlQuery='DELETE FROM client_user WHERE id=?';
        const row=pool.query(sqlQuery,req.params.id);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})



//delete all users
Clientrouter.delete('/',(req,res)=>{
    try {
        const sqlQuery='DELETE FROM client_user';
        const row=pool.query(sqlQuery);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})




module.exports=Clientrouter;