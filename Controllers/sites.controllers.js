const pool = require("../Database/database");
const path = require("path");
const db = require("../Database/database");


//get all sites of a subscription

const GetAllSites = async (req, res) => {
  const sqlQuery = "SELECT * FROM site WHERE idSubscription=? AND visibility=1";
  pool.query(sqlQuery, req.params.id, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//get all sites

const GetFullSites = async (req, res) => {
  const sqlQuery = "SELECT * FROM site";
  pool.query(sqlQuery, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//get a specific site

const GetSite = async (req, res) => {
  //const sqlQuery = 'SELECT * FROM site left JOIN subscription ON site.idSubscription=subscription.id WHERE site.siteid=?';
  const sqlQuery = "SELECT * FROM site WHERE siteid=?";
  pool.query(sqlQuery, req.params.id, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

// get site reviews

const GetSiteReviews = async (req, res) => {
  const sqlQuery = "SELECT * FROM reviews WHERE site_id=? AND rating>=3 ";
  pool.query(sqlQuery, req.params.id, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//get site users

const GetSiteUsers = async (req, res) => {
  const sqlQuery = "SELECT * FROM client_user WHERE idSite=?";
  pool.query(sqlQuery, req.params.id, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//get site rating

const GetSiteRating = async (req, res) => {
  const sqlQuery =
    "SELECT (CAST(AVG(rating) AS SIGNED)) as rate FROM reviews WHERE site_id=?";
  pool.query(sqlQuery, req.params.id, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//create a new  site

const CreateSite = async (req, res) => {
  try {
    const sitename = req.body.sitename;
    const sitedescription = req.body.sitedescription;
    const category = req.body.category;
    const webURL = req.body.webURL;
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const location = req.body.location;
    const siteimg = req.file;
    const idSubscription = req.body.idSubscription;

    const sqlQuery =
      "INSERT INTO site (sitename,sitedescription,category,webURL,cname,cemail,location, siteimg ,idSubscription) VALUES (?,?,?,?,?,?,?,?,?)";
    const row = pool.query(sqlQuery, [
      sitename,
      sitedescription,
      category,
      webURL,
      cname,
      cemail,
      location,
      siteimg,
      idSubscription,
    ]);

    console.log("success");
    res.status(200).send({ message: "site added" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//delete a specific site

const DeleteSite = async (req, res) => {
  try {
    const sqlQuery = "DELETE FROM site WHERE id=?";
    const row = pool.query(sqlQuery, req.params.id);

    res.status(200).send({ message: "Data Deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete all sites

const DeleteSiteAll = async (req, res) => {
  try {
    const sqlQuery = "DELETE FROM site";
    const row = pool.query(sqlQuery);

    res.status(200).send({ message: "Data Deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Update a site

const UpdateSite = async (req, res) => {
  try {
    const sitename = req.body.sitename;
    const sitedescription = req.body.sitedescription;
    const category = req.body.category;
    const webURL = req.body.webURL;
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const location = req.body.location;
    const siteimg = req.file;
    //const idSubscription=req.body.idSubscription;
    const siteid = req.body.siteid;

    const sqlQuery =
      "UPDATE site SET sitename=?,sitedescription=?,category=?,webURL=?,cname=?,cemail=?,location=?,siteimg=? WHERE siteid=?";
    const row = pool.query(sqlQuery, [
      sitename,
      sitedescription,
      category,
      webURL,
      cname,
      cemail,
      location,
      siteimg,
      siteid,
    ]);

    console.log("success");
    res.status(200).send({ message: "site updated" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};



const getAllSites = ((req, res) => {
  db.query('SELECT * FROM site', (err, result) => {
      if (err){
          console.log(err);
      }else{
          res.send(result);
      }
  });
})


const getSite = ((req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM site where id = ?',id, (err, result) => {
      if (err){
          console.log(err);
      }else{
          res.send(result);
      }
  });
})


const getSummary = ((req, res) => {
  db.query('SELECT siteid,sitename,category,Total,icon from site;', (err, result) => {
      if (err){
          console.log(err);
      }else{
          res.send(result);
      }
  });
})








module.exports = {
  GetAllSites,
  GetSite,
  GetSiteUsers,
  GetFullSites,
  CreateSite,
  DeleteSite,
  DeleteSiteAll,
  UpdateSite,
  GetSiteRating,
  GetSiteReviews,
  getAllSites,
  getSite,
  getSummary
};
