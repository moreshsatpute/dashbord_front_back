const express =require("express");
const {createJobPosting,getJobPosting}=require('../controllers/JobPostingController')
const router=express.Router();

//routes to create a new Franchise
router.post('/JobPosting', createJobPosting);


router.get('/JobPosting', getJobPosting);

module.exports=router;