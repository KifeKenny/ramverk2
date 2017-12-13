/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
    "use strict";

    var mesToSend;
    let websocket;
    let url         = document.getElementById("connect_url");
    let connect     = document.getElementById("connect");
    let protocol    = document.getElementById("protocol");
    let sendMessage = document.getElementById("send_message");
    let message     = document.getElementById("message");
    let close       = document.getElementById("close");
    let output      = document.getElementById("output");
    let setNickName    = document.getElementById("nickName");
    let holdNickName    = document.getElementById("userName");
    let clearLog    = document.getElementById("clearLog");


    /**
     * Log output to web browser.
     *
     * @param  {string} message to output in the browser window.
     *
     * @return {void}
     */
    function outputLog(message) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();

        output.innerHTML += `${timestamp} ${message}<br>`;
        output.scrollTop = output.scrollHeight;
    }

    /**
     * Log output to web browser in case of error.
     *
     * @param  {string} message to output in the browser window only to self.
     *
     * @return {void}
     */
    function outputError(message) {
        output.innerHTML += `<strong style="color: red"> Error: <em> ${message} <em> </strong><br>`;
        output.scrollTop = output.scrollHeight;
    }




    /**
     * Select what subprotocol to use for websocekt connection.
     *
     * @return {string} with name of subprotocol.
     */
    function setSubProtocol() {
        return protocol.value;
    }



    /**
     * What to do when user clicks Connect
     */
    connect.addEventListener("click", function(/*event*/) {
        if (!holdNickName.value) {
            if (!setNickName.value) {
                outputError("Username not set");
                console.log("Username not set");
                return;
            }
            holdNickName.value = setNickName.value;
            console.log("Username set to: " + setNickName.value);
        }

        console.log("Connecting to: " + url.value);
        if (!protocol.value) {
            websocket = new WebSocket(url.value);
        } else {
            websocket = new WebSocket(url.value, setSubProtocol());
        }

        websocket.onopen = function() {
            console.log("The websocket is now open using '" + websocket.protocol + "'.");
            console.log(websocket);
            outputLog("The websocket is now open using '" + websocket.protocol + "'.");
        };

        websocket.onmessage = function(event) {
            var allData = JSON.parse(event.data);

            console.log(event);
            console.log("--------------------------------------------");
            console.log(allData.data);
            outputLog(`<strong>${allData.name}:<strong> ${allData.data}`);
        };

        websocket.onclose = function() {
            console.log("The websocket is now closed.");
            console.log(websocket);
            outputLog("Websocket is now closed.");
        };
    }, false);




    /**
     * What to do when user clicks to send a message.
     */
    sendMessage.addEventListener("click", function(/*event*/) {
        let messageText = message.value;

        if (!websocket || websocket.readyState === 3) {
            console.log("The websocket is not connected to a server.");
            outputError("The websocket is not connected to a server.");
        } else {
            mesToSend = {message: messageText, name: holdNickName.value};
            console.log("Sending message: " + mesToSend.name + ": " + messageText);
            console.log(mesToSend);

            websocket.send(JSON.stringify(mesToSend));
            outputLog(`<strong>${mesToSend.name}:</strong> ${messageText}`);
        }
    });



    /**
     * What to do when user clicks Close connection.
     */
    close.addEventListener("click", function(/*event*/) {
        console.log("Closing websocket.");
        mesToSend = {message: "Client closing connection by intention.", name: holdNickName.value};
        websocket.send(JSON.stringify(mesToSend));
        websocket.close();
        console.log(websocket);
        outputLog("<strong>Server:</strong> Prepare to close websocket.");
    });


    clearLog.addEventListener("click", function(/*event*/) {
        output.innerHTML = "";
        output.scrollTop = output.scrollHeight;
    });
})();
