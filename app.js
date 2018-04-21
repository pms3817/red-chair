// server.js
//load the things we need
var express = require('express');
var app = express();

//serve static files
app.use(express.static('public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file

//index page
app.get('/', function(req, res) {
    res.render('pages/index', {section: 'home'});
});

//NBA page
app.get('/nba', function(req, res) {
    res.render('pages/nba', {section: 'nba'});
});

//Games page
app.get('/games', function(req, res) {
    res.render('pages/games', {section: 'games'});
});

//Injuries page
app.get('/injuries', function(req, res) {
    res.render('pages/injuries', {section: 'injuries'});
});

//Teams page
app.get('/teams', function(req, res) {
    res.render('pages/teams', {section: 'teams'});
});

//Players page
app.get('/players', function(req, res) {
    res.render('pages/players', {section: 'players'});
});

//Minsoo's secret page
app.get('/minsoo', function(req, res) {
    res.render('pages/minsoo', {section: 'minsoo'});
});



app.listen(process.env.PORT || 8080);
console.log( process.env.PORT || 8080 + ' is the magic port');
