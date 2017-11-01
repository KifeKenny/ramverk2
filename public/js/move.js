/**
 * To move around the image on click.
 */
(function () {
    "use strict";

    var element = document.getElementById("textP1");

    element.addEventListener("click", function() {
        // var style = window.getComputedStyle(element);

        element.style.color = "red";

        console.log("Image was clicked");
    });
}());
