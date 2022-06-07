const fs = require('fs');
const router = require('express').Router();
const notes = require('../../db/db.json');


router.get('/notes', (req, res)=>{
    // let results = notes;
    // if (re.query){
    //     results = filterByQuery (req.query, results);
    // }
    // res.json(notes);
    res.sendFile(path.join(__dirname, "../../db/db.json"));
});
// router.get('/notes/:title', (req, res) => {
//     const result = findById(req.params.title, notes);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });
//   router.post('/api/notes', (req, res) => {
//     // set title based on what the next index of the array will be
//     req.body.title = notes.length.toString();

// // if any data in req.body is incorrect, send 400 error back
// if (!validateNote(req.body)) {
//     res.status(400).send('The note is not properly formatted.');
// } else {

//     // add note to json file and notes array in this function
//     const note = createNewNote(req.body, notes);
//     res.json(note);
// }
//   })
//router.delete('/notes/:title')
 // });

module.exports = router;