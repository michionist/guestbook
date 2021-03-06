/* eslint-disable no-undef */
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();
const port = 4000;
const host = '127.0.0.1';

// Mysql Connection
// eslint-disable-next-line no-unused-vars
var mysqlConnection = require('./models/connection');

// Import the routes file
const indexRoute = require('./routes/index');
const guestsRoute = require('./routes/guests');

// Setup the view engine
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Route handling
app.use('/', indexRoute);
app.use('/guests', guestsRoute);

// Add middle library for request handling
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');

});


app.listen(port, host, () => {
	console.log(`Server is running at http://${host}:${port}`);
});

module.exports = app;