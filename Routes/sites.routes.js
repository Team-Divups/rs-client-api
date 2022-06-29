const controller = require("../Controllers/sites.controllers");
const Siterouter = require("express").Router();
const multer=require('multer');
const path = require('path');

//Image upload
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'Images')
    },
    filename : (req,file,cb)=>{
        console.log(file);
        return cb(null, Date.now()+ path.extname(file.originalname));
    }
})

 
const upload = multer({
    storage :storage
})

Siterouter.get('/:id',controller.GetAllSites);
Siterouter.get('/view/:id',controller.GetSite);
Siterouter.get('/user/:id',controller.GetSiteUsers);
Siterouter.get('/rating/:id',controller.GetSiteRating);
Siterouter.get('/reviews/:id',controller.GetSiteReviews);

Siterouter.post('/create',upload.single('siteimg'),controller.CreateSite);

Siterouter.delete('/delete/:id',controller.DeleteSite);
Siterouter.delete('/',controller.DeleteSiteAll);

Siterouter.put('/edit',upload.single('siteimg'),controller.UpdateSite);

module.exports=Siterouter;