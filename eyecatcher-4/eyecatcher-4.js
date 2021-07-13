function platinumMarginRibbingGenerator () {
    let ribbing = document.createElement("div");

    for (let i = 0; i < 12; i++) {
        let rib = document.createElement("div");

        if ( i % 2 === 0 ) {
             rib.setAttribute("style", "border-top: 1px solid white; border-right: 1px solid #cecece");
        } else {
            rib.setAttribute("style", "border-top: 1px solid #737373; border-left: 1px solid #cecece");
        }

        ribbing.appendChild(rib);
    }

    return ribbing;
}

document.getElementById("platinumLeftMargin").appendChild(platinumMarginRibbingGenerator());
document.getElementById("platinumRightMargin").appendChild(platinumMarginRibbingGenerator());

function getAMPMTime() {
    let currentDate = new Date;
    let current24HTime = [ currentDate.getHours(), currentDate.getMinutes() ];
    if (current24HTime[1] < 10) { current24HTime[1] = "0" + current24HTime[1] }; // hmm!!!
    if (current24HTime[0] === 12) {
        return current24HTime[0] + ":" + current24HTime[1] + " PM";
    } else if (current24HTime[0] === 0) {
        return 12 + ":" + current24HTime[1] + " AM";
    } else if (current24HTime[0] > 12) {
        return (current24HTime[0] - 12) + ":" + current24HTime[1] + " PM";
    } else if (current24HTime[0] < 12) {
        return current24HTime[0] + ":" + current24HTime[1] + " AM";
    }
}

document.getElementById("menuBarTime").innerHTML = getAMPMTime();
setInterval(function() { document.getElementById("menuBarTime").innerHTML = getAMPMTime(); }, 60000 );

// yes, this is just the getAMPMTime() from eyecatcher-2.js

const boomerShooters = [
    "duke.jpg",
    "caleb.png",
    "freeman.png",
    "doomguy.jpg",
    "ranger.png",
    "half_life.gif"
];

function openWithinPlatinumWindow(thing) {
    if (RegExp(".mp4").test(thing) === true) {
        var toDisplay = document.createElement("video");
        toDisplay.setAttribute("autoplay", "");
    } else {
        var toDisplay = document.createElement("img");
    }

    toDisplay.src = "eyecatcher-4/" + thing;

    var displayed = document.getElementById("content").appendChild(toDisplay);
    document.getElementById("platinumTitleBarName").innerHTML = thing;
}

function getBoomerShooter() {
    document.getElementById("content").innerHTML = null;
    openWithinPlatinumWindow(boomerShooters[Math.floor(Math.random() * boomerShooters.length)]);
}

getBoomerShooter();
