const express = require("express");
const https = require("https");//we don't have to install becouse it is netive https module of node js
const app = express();

app.get("/", function(req, res){
    
    const url ="https://api.openweathermap.org/data/2.5/weather?q=india&appid=e7fb95898218364a67d1d40861316e1f&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);
        
    });
    res.send("server is up and running.")
})


app.listen(3000,function(){
    console.log("server is running on port 3000.");
});