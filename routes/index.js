var express = require('express');
var router = express.Router();
var path = require('path');

var mysql = require('mysql');

var bodyParser = require('body-parser');
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./public/homePage.html'));
});

router.post('/contact', function(req, res, next){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dkhales',
    password: 'nicolasmacbeth',
    database: 'conu'
  });
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO coffeebreak (jobID, field, start, end) VALUES ('"+req.body.EmployeeIds+"', '"+req.body.department+"', '"+req.body.startTime+"', '"+req.body.endTime+"')";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
  
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'dkhales',
      password: 'nicolasmacbeth',
      database: 'conu'
    });
    connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT * FROM coffeeBreak WHERE start = '"+req.body.startTime+"'", function (err, result) {
        if (err) throw err;
        console.log(result);

        if(result){
          var connection = mysql.createConnection({
            host: 'localhost',
            user: 'dkhales',
            password: 'nicolasmacbeth',
            database: 'conu'
          });
          connection.connect(function(err) {  
            if (err) throw err;  
            var sql = "DELETE FROM coffeebreak WHERE jobID = '"+req.body.EmployeeIds+"'";  
            connection.query(sql, function (err, result) {  
            if (err) throw err;  
            console.log("Number of records deleted: " + result.affectedRows);  
            });  
          });
          res.sendFile(path.resolve('./public/secondPage.html'));

        }else{
          


        }
      });

    });
  
});

module.exports = router;








