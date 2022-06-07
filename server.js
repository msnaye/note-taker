const fs = require('fs');
const path = require ('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const express = require('express'); 
const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', htmlRoutes);
app.get('api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});