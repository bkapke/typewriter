/*jslint browser: true, devel: true, plusplus: true */

var TypeWriter = function (element, settings) {
    "use strict";
    var text = element.text(),
        stringLength = text.length,
        count = 0,
        randomSpeed;

    element.text("");
    element.show();

    function randomizeSpeed() {
        if (settings.randomRange) {
            randomSpeed = Math.ceil(Math.random() * settings.speed);
            console.log(randomSpeed);
        } else {
            randomSpeed = settings.speed;
        }

        return randomSpeed;
    }

    function typeLetter() {
        var visibleTextLength = element.text().length;
        if (visibleTextLength <= stringLength) {
            element.append(text.charAt(count));
        }
        count++;
    }

    setTimeout(function () {
        (function loop() {
            randomSpeed = randomizeSpeed();
            setTimeout(function () {
                typeLetter();
                if (count < stringLength - 1) {
                    loop();
                }
            }, randomSpeed);
        }());
    }, settings.delayedStart);


};