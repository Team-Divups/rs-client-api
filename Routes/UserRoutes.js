const express = require('express')
const router = express.Router()

const {getNewUsers} =  require('../Controllers/UserController');


router.get('/getNewUsers', getNewUsers);


module.exports = router;