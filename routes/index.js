/** This is  the Index Route */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('/ This is the index route');
});

module.exports = router;