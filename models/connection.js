/**
 * THIS IS THE CONNECTION FILE
 * WRITTEN IN MYSQL
 */
let mysql = require('mysql');
// const createError = require('http-errors');



let connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'sequelPro',
	password: 'QuickBrowny190_',
	database: 'eventApp',
	timezone: 'local',
	trace: true,
	charset: 'utf8_general_ci'
});

connection.connect(err => {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);

});

// eslint-disable-next-line no-unused-vars
//




connection.end(err => {
	if (err)
		console.log(`An error occured while closing Mysql ${err}`);
});



module.exports = connection;