const messages = require('../messages');

const getDetail = (req, res) => {
	const { index } = req.params;

	const detail = messages.find(
		(messageObj) => messages.indexOf(messageObj) === index
	);

	console.log(detail);
	// findIndex((messageIndex) => messageIndex === index);

	// res.send(detail);
	res.render('detail', {
		user: detail.user,
		text: detail.text,
		added: detail.added,
	});
};

module.exports = getDetail;
