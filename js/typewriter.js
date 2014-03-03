/*jslint browser: true, devel: true, plusplus: true */

/*
 
********** Settings parameters **********

- delayedStart = how long the page waits before typing
- speed = time between letters being added (if random is enabled, speed will be the max time value between letters).
- random = (boolean) if false, the speed is the time before each letter is added.  if true, the time between letters is
    a random number between 0 and the speed parameter.  Simulates a less regular typing.
- debug = (boolean) prints out debugging data in the console when set to true.


********* Available Settings *************
var settings = ({
    delayedStart: 300,
    speed: 75,
    randomRange: true,
    debug: true
});



*/

var TypeWriter = function (element, settings) {
    "use strict";
    var text = element.text(),
        stringLength = text.length,
        count = 0,
        randomSpeed,
        skipTyping = false,
        clickNoise;

    element.text("");
    element.show();

    if (settings.keyClickPath) {
        clickNoise = new Audio(settings.keyClickPath);
    }

    function randomizeSpeed() {
        if (settings.randomRange) {
            randomSpeed = Math.ceil(Math.random() * settings.speed);
        } else {
            randomSpeed = settings.speed;
        }
        if (settings.debug) {
            console.log("Speed Applied : " + randomSpeed + " milleseconds");
        }
        return randomSpeed;
    }

    function typeLetter() {
        var visibleTextLength = element.text().length;
        if (visibleTextLength <= stringLength && !skipTyping) {
            element.append(text.charAt(count));
        }
        if (skipTyping) {
            element.text(text);
            count = stringLength;
            if (clickNoise) {
                clickNoise.pause();
            }
        }
        count++;
    }

    setTimeout(function () {
        if (clickNoise) {
            clickNoise.play();
        }
        (function loop() {
            randomSpeed = randomizeSpeed();
            setTimeout(function () {
                typeLetter();
                if (count < stringLength) {
                    loop();
                } else {
                    if (clickNoise) {
                        clickNoise.pause();
                    }
                }
            }, randomSpeed);
        }());
    }, settings.delayedStart);

    this.skip = function () {
        skipTyping = true;
    };


};