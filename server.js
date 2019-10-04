var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = 3000;

app.use(middleware.logger);
app.get("/ben", middleware.requireAuthentication, function(req, res){
    res.send("benle ilgili herşey");
})
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("ramazan aygün" + PORT + "nolu çalışmaktadır");
});

