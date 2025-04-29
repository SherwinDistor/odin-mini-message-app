// const messages = require('../messages');
const db = require('../db/queries');

// const getMessages = (req, res) => {
// 	res.render('index', { title: 'Mini Messageboard', messages: messages });
// };

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	console.log(messages);
	// res.send(messages);
	res.render('index', { title: 'Mini Message App', messages: messages });
}

module.exports = getMessages;
