#!/usr/bin/env node
"use strict";

// Create the app objekt
var express = require("express");
var app = express();

const path = require("path");
// const fs = require("fs");

// console.log(process.env.DBWEBB_PORT);

var port;

if ('DBWEBB_PORT' in process.env) {
    port = process.env.DBWEBB_PORT;
    console.log("port set to: port=" + port);
} else {
    port = 1337;
    console.log("No DBWEBB_PORT found setting it to defeault port=1337");
}
// enable views from pug
app.set('view engine', 'pug');

// //Fixes better layout for html code
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}


// Serve static files
var staticFiles = path.join(__dirname, "public");

app.use(express.static(staticFiles));


// Add routes
app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    });
});

app.get("/report", (req, res) => {
    res.render("report", {
        title: "Report"
    });
});

// Start up server
console.log("Express is ready.");
console.log("Listening to port: " + port);
app.listen(port);
