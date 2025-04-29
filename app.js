const express = require('express');
const app = express();

// use dot env file
require('dotenv').config();

// import routers
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

// Set up views folder for ejs
const path = require('node:path');
const detailRouter = require('./routes/detailRouter');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// Set up static path for styles.css
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Routing
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/detail', detailRouter);

// Set up server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

app.use((err, req, res, next) => {
	console.error(err);

	res.status(err.statusCode || 500).send(err.message);
});
