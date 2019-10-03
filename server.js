var express = require("express");
var app = express();
var PORT = 3000;
var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log("rout girildi");
        next();
    },
    logger: function(req, res, next) {
        console.log(req.method + "" + req.originalUrl);
        next();
    }
}
app.use(middleware.logger);
app.get("/ben", middleware.requireAuthentication, function(req, res){
    res.send("benle ilgili herşey");
})
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("ramazan aygün" + PORT + "nolu çalışmaktadır");
});

