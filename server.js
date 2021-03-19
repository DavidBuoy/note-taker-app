// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Express App to handle data paesing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// HTML Routes
// Repurposed from the StarWars App in class.
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));

// This writes the info to the db.json file
app.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (error, response) => {
        if (error) throw error;
        const notes = JSON.parse(response);
        const body = req.body;
        const writeNewNote = {
            title: body.title,
            text: body.text
        };

        notes.push(writeNewNote);
        res.json(writeNewNote);
        fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), (error) => {
            if (error) throw error;
        });
    });
});





// Server Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});