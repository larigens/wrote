// Packages needed
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Modules needed
const fsUtils = require('../helpers/fsUtils');

// Helper method that gives each note a unique id when it's saved.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes.
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

// POST Route for a new note.
router.post('/', (req, res) => {
    console.info(`${req.method} request received`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        // Obtain existing notes and write updated notes back to the file.
        fsUtils.readAndAppend(newNote);
        console.info(`Note added successfully 🚀`)
        res.json(newNote);
    } else {
        res.status(500).json('Error in posting note');
    }
});

// DELETE Route to delete a note.
router.delete('/:id', (req, res) => {
    // Logs the request to the terminal
    console.info(`${req.method} request received`);
    // This function blocks the rest of the code from executing until all the data is read from a file.
    let rawdata = fs.readFileSync(fsUtils.fileName)
    // Convert rawdata(in a Buffer) into JSON object
    let parsedData = JSON.parse(rawdata);
    // Checks the array using the query parameter containing the id of a note that the user wants to delete, and rewrite the notes to the db.json file the array without this specific note.
    notesArr = parsedData.filter(note => note.id != req.params.id)
    console.info(notesArr)
    // Writes updated notes back to the file.
    fsUtils.writeToFile(fsUtils.fileName, notesArr);
    console.info(`Note deleted successfully 🚀`)
    res.json(notesArr);
})

module.exports = router;