// Packages needed
const express = require('express');
const router = express.Router();

// Modules needed
const fsUtils = require('../helpers/fsUtils');

// Helper method that gives each note a unique id when it's saved.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    // Logs the request to the terminal
    console.info(`${req.method} request received`);
    // Reads the db.json file and return all saved notes as JSON.
    fsUtils.readFromFile(fsUtils.fileName)
        .then((data) => {
            res.json(JSON.parse(data))
            console.log(data);
        })
        .catch((err) => {
            console.info(err)
        })
});

// POST Route for a new note
router.post('/', (req, res) => {
    console.info(`${req.method} request received`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        // Obtain existing notes and write updated notes back to the file.
        fsUtils.readAndAppend(newNote);
        console.info(`Note added successfully 🚀`)
        res.json(newNote);
    } else {
        res.status(500).json('Error in posting note');
    }
});

// const db = require('../db/db.json')
// const notesArr = [];
// app
//     .route("/api/notes/:id")
//     // GET request for a single review
//     .get((req, res) => {
//         if (req.params.id) {
//             console.info(`${req.method} request received to get a single note`);
//             const noteID = req.params.id;
//             // Goes through every note to find the matching ID.
//             for (let i = 0; i < db.length; i++) {
//                 const currentNote = db[i];
//                 if (currentNote.id === noteID) {
//                     res.status(200).json(currentNote);
//                     return;
//                 }
//             }
//             res.status(404).send('Note not found');
//         }
//         // Lets the client know that their request was received.
//         res.send(`${req.method} request received for the note with id ${req.params.id}`);
//         // Shows the user agent information in the terminal.
//         console.info(req.rawHeaders);
//         // Logs our request to the terminal.
//         console.info(`${req.method} request received`);
//         // Sending all notes to the client.
//         return res.json(db)
//     })
//     .delete((req, res) => {
//         // Logs that a DELETE request was received
//         console.info(`${req.method} request received to delete a note`);
//         // Checks the array using the query parameter containing the id of a note that the user wants to delete, and rewrite the notes to the db.json file the array without this specific note.
//         notesArr = db.filter(note => note.id != req.params.id)
//         res.json({
//             message: `Note ${req.params.id} was removed!`,
//             status: true
//         })
//         console.log(notesArr)
//     })


module.exports = router;