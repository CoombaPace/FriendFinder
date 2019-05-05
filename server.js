// =================================================================================== //
//				      	REQUIREMENTS
// =================================================================================== //

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// =================================================================================== //
//				  	EXPRESS SERVER SETUP
// =================================================================================== //

var app = express(); 
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// =================================================================================== //
//					        ROUTES
// =================================================================================== //
app.use(express.static('./app/public'));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// =================================================================================== //
//					        LISTENER
// =================================================================================== //

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});