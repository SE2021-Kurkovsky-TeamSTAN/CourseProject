var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+ '/addclaimexample.html');
});

app.post('/addclaim', function (req, res) {
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var phonenumber = req.body.phonenumber;
	var email = req.body.email;
	var pholderstreetaddress = req.body.pholderstreetaddress;
	var pholdertown = req.body.pholdertown;
	var pholderzip = req.body.pholderzip;
	var policynumber = req.body.policynumber;
	var location = req.body.location;
	var latlong = req.body.latlong;
	var category = req.body.category;
	var description = req.body.description;
	res.send('Claim Submitted Successfully!');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("testdb");
  		var myobj = { firstname: firstname, lastname: lastname, phonenumber: phonenumber, email: email, pholderstreetaddress: pholderstreetaddress, pholdertown: pholdertown, pholderzip: pholderzip, policynumber: policynumber, location: location, latlong: latlong, category: category, description: description };
 		dbo.collection("claim").insertOne(myobj, function(err, res) {
    			if (err) throw err;
    			console.log("1 document inserted");
   			db.close();
  		});
	}); 
});

app.post('/getCoordinates', function (req, res) {
});

app.post('/getClaim', function (req, res) {
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("testdb");
		dbo.collection("claim").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  		});
	}); 
});

function createTable(tableData) {
  var table = document.createElement('table');
  var row = {};
  var cell = {};

  tableData.forEach(function(rowData) {
    row = table.insertRow(-1); // [-1] for last position in Safari
    rowData.forEach(function(cellData) {
      cell = row.insertCell();
      cell.textContent = cellData;
    });
  });
  document.body.appendChild(table);
}


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
