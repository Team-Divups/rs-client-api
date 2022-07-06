const db = require("../Database/database");

const getNewUsers = ((req, res) => {
    db.query('SELECT * FROM users order by createdAt limit 5', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const getTotal = ((req, res) => {
    db.query('SELECT * FROM users order by createdAt limit 5', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

module.exports = {
   getNewUsers,
}