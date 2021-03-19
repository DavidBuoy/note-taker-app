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








// Server Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});