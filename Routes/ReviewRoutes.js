const express = require('express')
const router = express.Router()

const {getSummary ,getSiteReviews , getCountryTotal , monthTotal , getReviews, getAverage , getSiteCountryTotal , getSiteReviewsTotal} =  require('../Controllers/ReviewsController');


router.get('/getSummary', getSummary);
router.get('/getSiteReviews/:id', getSiteReviews);
router.get('/getCountryTotal', getCountryTotal);
router.get('/monthTotal', monthTotal);
router.get('/getReviews', getReviews);
router.get('/getAverage/:id', getAverage);
router.get('/getSiteCountryTotal/:id', getSiteCountryTotal);
router.get('/getSiteReviewsTotal/:id', getSiteReviewsTotal);


module.exports = router;