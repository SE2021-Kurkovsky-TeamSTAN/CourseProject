var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var requestify = require('requestify'); 
requestify.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCcaek9yMIWBA20Hr8a61-z8Uitf8Rw0hw");


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
	var latlong = getlocation(location);
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

var getlocation= function(req, res, next) {
	var API_KEY = "AIzaSyCGIOYXVitNDkRuViTP-xJ6X6fW-RJpk6w";
	var baseurl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
	var address = req;
	var url = baseurl + address + "&key=" + API_KEY;
	requestify.get(url).then(function(response) {
		response.getBody();
		console.log(response);
	});
}

app.get('/getclaim', function (req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("testdb");
		dbo.collection("claim").find({}).toArray(function(err, result) {
    			if (err) throw err;
			res.render('table.ejs', { claim : result});
    			console.log(result);
    			db.close();
  		});
	});
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
