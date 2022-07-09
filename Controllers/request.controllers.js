const pool = require('../Database/database');

const CreateDltRequest = async (req,res)=>{
    try {
        const problem = req.body.problem;
        const SiteId = req.body.SiteId;
        const SubId = req.body.SubId;

        const sqlQuery='INSERT INTO request (problem,severity_level,SiteId,SubId,ReqCategory) VALUES (?,"major",?,?,"Sites")';
        const row= pool.query(sqlQuery,[problem,SiteId,SubId]);
        
        res.status(200).send({message:'request sent'});
        console.log("success");
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

const Create = async (req,res)=>{
    try {
        const problem = req.body.problem;
        const severity_level= req.body.severity_level;
        const SubId = req.body.SubId;
        const ReqCategory= req.body.ReqCategory;

        const sqlQuery='INSERT INTO request (problem,severity_level,SubId,ReqCategory) VALUES (?,?,?,?)';
        const row= pool.query(sqlQuery,[problem,severity_level,SubId,ReqCategory]);
        
        res.status(200).send({message:'request sent'});
        console.log("success");
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

module.exports={CreateDltRequest}