const messages = require('../messages');

const postMessage = (req, res) => {
	const user = req.body.name;
	const message = req.body.message;
	messages.push({
		text: message,
		user: user,
		date: new Date(),
	});

	res.redirect('/');
};

module.exports = postMessage;
