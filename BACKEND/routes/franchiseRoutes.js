const express =require("express");
const {createFranchise,getFranchise}=require('../controllers/franchiseController')
const router=express.Router();

//routes to create a new Franchise
router.post('/franchise', createFranchise);


router.get('/franchise', getFranchise);

module.exports=router
;