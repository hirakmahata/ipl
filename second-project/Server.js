var express=require("./node_modules/express");
var path=require("path");
var bodyParser=require("./node_modules/body-parser");
var data=require("./public/data.json");
var indexRouter=require("./routes/index");


var port=process.env.PORT || 8081;
var app=express();


//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);


//set static folder
app.use(express.static(path.join(__dirname, "public")));


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use("/", indexRouter);


//get economic bowlers
app.get("/economy",function(req,res){
    const year=req.query.year;
    const result=data.topTenEconomicBowlersEveryYear[year];
    res.send(result);
});


//listen connection
app.listen(port, function(){
    console.log("SERVER IS LISTING ON PORT:"+port);
});
