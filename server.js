const express = require('express'); 
const db = require('./db/db.json');
const app = express();
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/') //for HTML FILE




app.listen(4444, () => {
    console.log(`API server now on port 4444!`);
});