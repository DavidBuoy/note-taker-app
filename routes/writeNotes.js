// LOAD DATA
const path = require("path");
const fs = require("fs");
const writeNote = require('../db/db.json');

// ROUTING
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(writeNote));
// This POSTs to the user input from the page and pushes it to the db.json file
// Starwars HW
    app.post("/api/notes", (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (error, response) => {

            if (error) throw error;

            const notes = JSON.parse(response);
            const body = req.body;
            const writeNewNote = {
                title: body.title,
                text: body.text,
            };
            // I couldnt get it to display the note when you click it. 
            notes.push(writeNewNote);
            res.json(writeNewNote);
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (error) => {
                if (error) throw error;
            });
        });
    });
};
