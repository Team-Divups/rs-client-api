// const db = require('../Data/Database');
const db = require("../Database/database");


const getSummary = ((req, res) => {
    db.query('SELECT COUNT(rating) AS Total , COUNT(distinct country) AS Country , SUM(agree) as Agreed from reviews;    ', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const getCountryTotal = ((req, res) => {
    db.query('SELECT country , COUNT(review) AS Total from reviews group by country;', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const getSiteReviews = ((req, res) => {
    const id = req.params.id;
    db.query('SELECT * from reviews where subid=? order by time limit 7;',id, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const monthTotal = ((req, res) => {
    db.query('SELECT (MONTHNAME(time)) as Month,COUNT(review) AS Total from reviews group by EXTRACT(month from time) order by time;', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})




const getReviews = ((req, res) => {
    const id = req.params.id;
    db.query('SELECT * from reviews order by time limit 6;', (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})



const getAverage = ((req, res) => {
    const id = req.params.id;
    db.query('SELECT subid, ROUND(AVG(rating),2)  AS Total,ROUND(AVG(mood),2)  AS Average  from reviews where subid=?;',id, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const getSiteCountryTotal = ((req, res) => {
    const id = req.params.id;
    db.query('SELECT country , COUNT(review) AS Total from reviews where subid=? group by country ;',id, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


const getSiteReviewsTotal = ((req, res) => {
    const id = req.params.id;
    db.query('SELECT rating , COUNT(review) AS Total from reviews where subid=? group by rating;',id, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})


module.exports = {
    getSummary,
    getCountryTotal,
    getSiteReviews,
    monthTotal,
    getReviews,
    getAverage,
    getSiteCountryTotal,
    getSiteReviewsTotal
}