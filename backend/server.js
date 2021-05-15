//load express
const express = require('express')

const app = express();
var cors = require('cors')
app.use(cors()) 

//read env file
require('dotenv').config();

//requiring all routes
require('./config/routes')(app);

// database connection
require('./config/db');

//Setting the port and starting the server
const port = parseInt(process.env.PORT) || 3000;
app.listen(port, function(){
	console.log("Server started on port "+port+"...");
})