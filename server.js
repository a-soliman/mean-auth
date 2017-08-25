const express 		= require('express');
const app 			= express();
const port 			= process.env.PORT || 8080;
const morgan 		= require('morgan');
const mongoose 		= require('mongoose');
const bodyParser 	= require('body-parser');
const router 		= express.Router();
let appRoutes 		= require('./app/routes/api')(router);
const path 			= require('path')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(appRoutes);

mongoose.connect('mongodb://ahmed:123456@ds145010.mlab.com:45010/firewoodmarketing-desk-reservation', function(err) {
	if(err) {
		console.log('Not connected to the database ' + err)
	} 
	else {
		console.log('succrssfully connected to the db.')
	}
});

// rendering the templates (front end)
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
});

app.listen(port, function() {
	console.log("server runing on port " + port)
});

