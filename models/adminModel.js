const connection = require('./connection');


const eventModel = {
	getAdmin: () => {
		connection.query('SELECT * FROM admin', function (error, results) {
			if (error)
				throw error;
			console.log(`This is the result from: ${results}`);

			results.forEach((results) => {
				console.log(`${results.fullName} is in ${results.email}`);
			});
		});
	},

};


module.exports = eventModel;