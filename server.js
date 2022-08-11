const express = require('express');

//const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// check public directory for static file requests
app.use(express.static('public'));

// use the router set up in apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});