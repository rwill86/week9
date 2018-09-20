const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/product/')));
app.use(cors(corsOptions));

var corsOptions = {
     origin: 'http://localhost:4200',
     optionSuccessStatus: 200
};

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var productObject;

MongoClient.connect(url, function(err, client){
     if(err){
		 throw err;
	 } 
	 var objectP;
     console.log('Database created!');
	 const dbName = 'mydb';
	 const db = client.db(dbName);
	 require('./create.js')(app, db);
	 require('./listen.js')(http);	 
	 var update = require('./update.js');
	 var read = require('./read.js');
	 var add = require('./add.js');
	 var remove = require('./remove.js');
	 var search = require('./search.js');
	 //var queryp = require('querypromise.js');
	 //var queryaw = require('queryasynwait.js');
	 app.put('/api/update/:id', function (req, res){
		 var productID =  req.params.id;
		 var na = req.body.name;
		 var pri = req.body.price;
		 var desc = req.body.description;
		 console.log(productID);
	     update.updatedata(db, productID, na, pri, desc, function(result){
			 res.send(result)
		     console.log(result);
	     }); 
	 });
	 
	 app.get('/api/delete/:id', function (req, res){
		 var productID = req.params.id;
		 console.log(productID);
	     remove.removedata(db, productID, function(result){
			 res.send(result)
		     console.log(result);
	     }); 
	 });
	 
	 app.get('/api/add', function (req, res){
		 var na = req.query.name;
		 var pri = req.query.price;
		 var des = req.query.description;
		 add.adddata(db, na, pri, des, function(result){
			 res.send(result)
		     console.log(result);
	     }); 
	 });
	 
	 app.get('/api/products', function (req, res){
		 read.alldata(db, function(result){
			 res.send(result);
		     console.log(result);
	     }); 
	 });
	 
	 app.get('/api/search', function (req, res){
		 search.searchdata(db, req, function(result){
			 res.send(result);
		     console.log(result);
	     }); 
	 });
});