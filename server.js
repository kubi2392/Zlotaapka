var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
      
  res.render('pages/public/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/public/about');
});
// login page
app.get('/login', function(req, res) {
  res.render('pages/public/login');
});
// register page
app.get('/register', function(req, res) {
  res.render('pages/public/register');
});
app.listen(8080);
console.log('Server is listening on port 8080');