var express=require("express");
var router=express.Router();


//get home page
router.get("/", function(req,res){
    res.render("index.html",{title: "express"});
});

module.exports=router;