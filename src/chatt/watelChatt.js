/**
 * A module webbsocket for a chatt
 *
 * @module
 */
"use strict";

const WebSocket = require("ws");

class WatelChatt {
    /**
     * @constructor Creates a webbsocket that takes json requests
     *
     * @param {object} server - server object ex express
     * @param {boolean} clientT - if to keep track on connected clients
     * @param {string} path - what path socket shoulf be on ex: /test
     */
    constructor(server, clientT, path) {
        this.wss = new WebSocket.Server({
            server: server,
            clientTracking: clientT,
            handleProtocols: this.handleProtocols,
            path: path
        });

        var mesConnect;

        // Setup for websocket requests. Handle socket after connection
        // what to do on message, error, close
        this.wss.on("connection", (ws/*, req*/) => {
            console.log("Connection received. Adding client.");
            mesConnect = `New client connected (${this.wss.clients.size}) using '${ws.protocol}'.`;
            this.broadcastExcept(ws, {message: mesConnect, name: "server"});
            // console.log(ws);

            ws.on("message", (message) => {
                console.log("Received: %s", message);
                this.broadcastExcept(ws, JSON.parse(message));
            });

            ws.on("error", (error) => {
                console.log(`Server error: ${error}`);
            });

            ws.on("close", (code, reason) => {
                console.log(`Closing connection: ${code} ${reason}`);
                mesConnect = {
                    message: `Client disconnected (${this.wss.clients.size}).`,
                    name: "server"
                };
                this.broadcastExcept(ws, mesConnect);
            });
        });
    }

    /**
     * @param {array} protocols - what kind of protocoll ex: json, text
     * choses first it find in array
     * @return {boolean or string} - If find valid protocol return that as
     * {string} if not return boolean false
     */
    handleProtocols(protocols /*, request */) {
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
     * sends message data to client as json string
     * @param {object} ws - webbsocket object
     * @param {object} data - contains message for chat and name which
     * none current use.
     */
    broadcastExcept(ws, data) {
        let clients = 0;

        this.wss.clients.forEach((client) => {
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
        console.log(`Broadcasted data to ${clients} (${this.wss.clients.size}) clients.`);
    }
}

module.exports = WatelChatt;
