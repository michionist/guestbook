/** This is  the Index Route */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('/ Greet the guests');
});


router.get('/cool', (req, res) => {
	res.send('One super cool guest!');
});





module.exports = router;