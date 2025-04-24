const messages = require('../messages');

const getMessages = (req, res) => {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
};

module.exports = getMessages;
