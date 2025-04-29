const pool = require('./pool');

async function getAllMessages() {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
}

// TODO
// Create function to post/insert into database
// Create function to delete messages from database

module.exports = {
	getAllMessages,
};
