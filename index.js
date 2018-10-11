#!/usr/bin/env node
"use strict";

const express = require("express");
const path = require("path");
const http = require("http");
const wChatt = require("./src/chatt/watelChatt");

//get routes
var home = require('./routes/default/home');
var about = require('./routes/default/about');
var report = require('./routes/default/report');
var chat = require('./routes/default/chat');

// Create the app objekt
const app = express();
const server = http.createServer(app);

var wss = new wChatt(server, true, "/chatt");

if (wss == "cat") {
    console.log("cat");
}

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
app.use('/', home);
app.use('/about', about);
app.use('/report', report);
app.use('/chat', chat);

app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

// Note the error handler takes four arguments
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});

// Start up server
console.log("Express is ready.");
console.log("Listening to port: " + port);
// app.listen(port);
server.listen(port);
