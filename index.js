const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Root route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Dynamic route for Instagram-like username
// app.get("/ig/:username", (req, res) => {
//     const followers = ["pravin","ram" ,"parjyot"," prathmesh"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username , followers });
// });
//-----------------------------------------------------

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    console.log(instaData);
    res.render("instagram.ejs", { instaData });
});


// input :http://localhost:8080/ig/tushar ;

// Simple hello route
app.get("/hello", (req, res) => {
    res.send("hello!");
});

// Dice roll route
app.get("/rolldice", (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { dicevalue });
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
