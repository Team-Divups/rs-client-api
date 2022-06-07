const express= require('express');
const pool = require('../Database/database');
const Clientrouter = express.Router();


//get all
Clientrouter.get('/',async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM client_user';
        const rows=await pool.query(sqlQuery,res.body);

        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


//create a new  user
Clientrouter.post('/create',async function(req,res){
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password=req.body.password;
        const designation=req.body.designation;
        const role=req.body.role;
        const country = req.body.country;
        const comments=req.body.comments;
        const status=req.body.status;

        const sqlQuery='INSERT INTO client_user (name,email,password,designation,role,country,comments,status) VALUES (?,?,?,?,?,?,?,?)';
        const row=await pool.query(sqlQuery,[name,email,password,designation,role,country,comments,status]);
        
        res.status(200).send({message:'user added'})
            
    } catch (error) {
        res.status(400).send(error.message);
    }
})



//delete a specific user
Clientrouter.delete('/delete/:id',async function(req,res){
    try {
        const sqlQuery='DELETE FROM admin_user WHERE id=?';
        const row=await pool.query(sqlQuery,req.params.id);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})



//delete all users
Clientrouter.delete('/',async function(req,res){
    try {
        const sqlQuery='DELETE FROM client_user';
        const row=await pool.query(sqlQuery);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})




module.exports=Clientrouter;