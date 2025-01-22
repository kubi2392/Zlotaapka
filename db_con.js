var mysql = require('mysql');
require('dotenv').config();

// Access environment variables
const apiKey = process.env.API_KEY;
const databaseUrl = process.env.DATABASE_URL;
var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});