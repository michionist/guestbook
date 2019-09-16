// eslint-disable-next-line no-unused-vars
const EventModel = require('../models/eventModel');

// CRUD


// Display Event create form on GET
exports.create_event_get = (req, res) => {
	res.send('NOT IMPLEMENTED:  create event get');
};

// Handle Event create form on POST
exports.create_event_post = (req, res) => {
	res.send('NOT IMPLEMENTED:  create event post');
};



// Display all Events
exports.event_list = (req, res) => {
	res.send('NOT IMPLEMENTED: Event list');
};

// Display event details
exports.event_details = (req, res) => {
	res.send('NOT IMPLEMENTED: Event details' + req.param.id);
};



// Display Update event get form
exports.update_event_get = (req, res) => {
	res.send('NOT IMPLEMENTED:  Updatae event get');
};

// Handle Update event POST form
exports.update_event_post = (req, res) => {
	res.send('NOT IMPLEMENTED:  Updatae event POST');
};



// Display delete event form get
exports.delete_event_get = (req, res) => {
	res.send('NOT IMPLEMENTED:  Delete event form GET');
};

// Display delete event form post
exports.delete_event_get = (req, res) => {
	res.send('NOT IMPLEMENTED:  Delete event form POST');
};

// https://github.com/michionist/guestbook.git