const express= require('express');
const pool = require('../Database/database');
const Rolerouter = express.Router();


//get all
Rolerouter.get('/',(req,res)=>{
    const sqlQuery = 'SELECT * FROM client_roles';
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


//get a specific role
Rolerouter.get('/:id ',(req,res)=>{
    const sqlQuery = 'SELECT * FROM client_roles where id=?';
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


//create a new  site
Rolerouter.post('/create',(req,res)=>{
    try {
        const name = req.body.name;
        const description=req.body.description;
        const idSubscription=req.body.idSubscription;
        const category = req.body.category;
      

        const sqlQuery='INSERT INTO site (name,description,idSubscription,category) VALUES (?,?,?,?)';
        const row= pool.query(sqlQuery,[name,description,idSubscription,category]);
        
        res.status(200).send({message:'site added'})
            
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})



//delete a specific site
Rolerouter.delete('/delete/:id',(req,res)=>{
    try {
        const sqlQuery='DELETE FROM client_roles WHERE id=?';
        const row=pool.query(sqlQuery,req.params.id);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})



//delete all sites
Rolerouter.delete('/',(req,res)=>{
    try {
        const sqlQuery='DELETE FROM client_roles';
        const row=pool.query(sqlQuery);

        res.status(200).send({message:'Data Deleted'});
    } catch (error){
        res.status(400).send(error.message);
    }
})




module.exports=Rolerouter;