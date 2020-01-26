var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var mysql = require('mysql');

function createRow(){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dkhales',
    password: 'nicolasmacbeth',
    database: 'conu'
  });
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO coffeebreak (jobID, time, field) VALUES ('23212','5:30:00','marketing')";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
}

  function deleteRow(){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'dkhales',
      password: 'nicolasmacbeth',
      database: 'conu'
    });
    connection.connect(function(err) {  
      if (err) throw err;  
      var sql = "DELETE FROM coffeebreak WHERE jobID = '23212'";  
      connection.query(sql, function (err, result) {  
      if (err) throw err;  
      console.log("Number of records deleted: " + result.affectedRows);  
      });  
    });
  }






