var express = require('express');

var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", ".ejs");
app.set('port', 13149);

app.get('/', function(req, res){
   res.render('home'); 
});

app.get('/home', function(req, res){
   res.redirect('/'); 
});

app.get('/diet', function(req, res){
   res.render('diet'); 
});

app.get('/study', function(req, res) {
    res.render('study');
})

app.get('/tdee', function(req, res) {
    res.render("tdee", {mystuff: req.query});
});

app.get('/work', function(req, res) {
    res.render("work");
});

app.get('*', function(req, res){
    res.sendStatus(404);
});

app.listen(app.get('port'), function(){
  console.log ("Express started on http://flip3.engr.oregonstate.edu:" + app.get('port') + "; press Ctrl-C to terminate.");
});
