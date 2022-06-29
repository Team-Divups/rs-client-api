const pool = require('../Database/database');

const CreateRequest = async (req,res)=>{
    try {
        const problem = req.body.problem;
        const status = req.body.status;
        const siteId = req.body.siteId;
        
        const sqlQuery='INSERT INTO request (problem,status,siteId) VALUES (?,?,?)';
        const row= pool.query(sqlQuery,[problem,status,siteId]);
        
        res.status(200).send({message:'request sent'});
        console.log("success");
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

module.exports={CreateRequest}