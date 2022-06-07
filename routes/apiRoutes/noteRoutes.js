const fs = require('fs');
const router = require('express').Router();
const notes = require('../../db/db.json');
const path = require('path');
const randomId = require('random-id');

router.get('/api/notes', (req, res)=>{
    
    res.sendFile(path.join(__dirname, "../../db/db.json"));
});

//router.delete('/notes/:title')

router.post('/api/notes', (req, res)=>{
    const newNote = req.body;
    const len = 10;
    const pattern ='aA0';
    newNote.id= randomId(len, pattern);
    console.log(newNote)

    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes)
})
module.exports = router;