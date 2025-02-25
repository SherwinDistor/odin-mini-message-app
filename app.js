const express = require('express');
const path = require('path');
const app = express();

// Set up views folder for ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up server to listen on port 5000
app.listen(5000);

// Sample messages
const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

// Routing
app.get('/', (req, res) => {
	res.render('index', { title: 'Mini Messageboard', messages });
});

app.get('/new', (req, res) => {});
