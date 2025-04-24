const messages = require('../messages');
const asyncHandler = require('express-async-handler');

const getDetail = asyncHandler(async (req, res) => {
	const { index } = req.params;

	const detail = await messages.find(
		(messageObj) => messages.indexOf(messageObj) === Number(index)
	);

	console.log(
		messages.find((messageObj) => messages.indexOf(messageObj) === 1)
	);
	// findIndex((messageIndex) => messageIndex === index);

	// res.send(detail);
	res.render('detail', {
		user: detail.user,
		text: detail.text,
		added: detail.added,
	});
});

module.exports = getDetail;
