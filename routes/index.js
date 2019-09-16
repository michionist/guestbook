/** This is  the Index Route */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {
		title: 'List all events'
	});
});

module.exports = router;