// Import the filesystem module
const fs = require('fs');

const util = require('util');
const path = require('path');

// Constant Declaration
const fileName = (path.join(__dirname, '../db/db.json'));

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// Function to write data to the JSON file
const writeToFile = (fileName, content) => {
  fs.writeFile(fileName, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${fileName}`)
  );
};

// Function to read data from db and append some content
const readAndAppend = (content) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const parsedData = JSON.parse(data);
        // Add a new note
      parsedData.push(content);
      // Write updated notes back to the file
      writeToFile(fileName, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, fileName };