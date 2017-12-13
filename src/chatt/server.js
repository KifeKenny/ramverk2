/**
 * Server using websockets and express supporting broadcase and echo
 * through use of subprotocols.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const http = require("http");
//const url = require("url");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true, // keep track on connected clients,
    handleProtocols: handleProtocols // Manage what subprotocol to use.
});

/**
 * Select subprotocol to use for connection.
 *
 * @param {Array} protocols              Subprotocols to choose from, sent
 *                                        by client request.
 * @param {http.IncomingMessage} request The client HTTP GET request.
 *
 * @return {void}
 */
function handleProtocols(protocols /*, request */) {
    console.log(`Incoming protocol requests '${protocols}'.`);
    for (var i=0; i < protocols.length; i++) {
        if (protocols[i] === "text") {
            return "text";
        } else if (protocols[i] === "json") {
            return "json";
        }
    }
    return false;
}



/**
 * Broadcast data to everyone except one self (ws).
 *
 * @param {WebSocket} ws   The current websocket.
 * @param {string}    data The data to send.
 *
 * @return {void}
 */
function broadcastExcept(ws, data) {
    let clients = 0;

    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            clients++;
            if (ws.protocol === "json") {
                console.log(data);
                let msg = {
                    timestamp: Date(),
                    data: data.message,
                    name: data.name
                };

                client.send(JSON.stringify(msg));
            } else {
                client.send(data); //sending data
            }
        }
    });
    console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
}


var mesConnect;

// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (ws/*, req*/) => {
    console.log("Connection received. Adding client.");
    mesConnect = `New client connected (${wss.clients.size}) using '${ws.protocol}'.`;
    broadcastExcept(ws, {message: mesConnect, name: "server"});
    // console.log(ws);

    ws.on("message", (message) => {
        console.log("Received: %s", message);
        broadcastExcept(ws, JSON.parse(message));
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        mesConnect = {message: `Client disconnected (${wss.clients.size}).`, name: "server"};
        broadcastExcept(ws, mesConnect);
    });
});



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
