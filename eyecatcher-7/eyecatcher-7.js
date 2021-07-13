// SPACE BACKGROUND GENERATION //

var spaceBackground = document.createElement("canvas");

spaceBackground.height = self.innerHeight;
spaceBackground.width = self.innerWidth;
spaceBackground.setAttribute("style", "position: fixed");

var spaceBackgroundContext = spaceBackground.getContext('2d');

/* as much as i'd like to try, it's just not per-object friendly
var mainAnimationContainer = document.createElement("canvas");
var mACCTX = mainAnimationContainer.getContext('2d');

mainAnimationContainer.setAttribute("height", self.innerHeight);
mainAnimationContainer.setAttribute("width", self.innerWidth);
mainAnimationContainer.setAttribute("style", "position: fixed");
*/



function loadSpace() {
    for (let i = 0; i < 26; i++) {
        let loadImage = new Image();
        loadImage.src = "eyecatcher-7/space/" + i + ".gif";
    }
    console.log("loaded space tiles");
}

function drawSpace() {
    for (var d_x = 0; d_x < self.innerWidth; d_x = d_x + 32) {
        for (var d_y = 0; d_y < self.innerHeight; d_y = d_y + 32) {
            let space = new Image();
            space.src = "eyecatcher-7/space/" + Math.floor(Math.random() * 25) + ".gif";
            spaceBackgroundContext.drawImage(space, d_x, d_y);
        }
    }
}

// SPACE OBJECTS LOADING, SELECTORS, CONSTRUCTORS //

const spaceThings = ['clown', 'captain-spare', 'toolbox', 'pizza', 'super-burger', 'burger', 'donut', 'carp', 'bear', 'corgi', 'dust', 'meteor', 'glass', 'vodka', 'whiskey', 'beer'];

function getSpaceThingPath(i) {
    return "eyecatcher-7/things/" + i + ".png";
}

function loadSpaceThings() {
    for (let i = 0; i < spaceThings.length; i++) {
        let loadImage = new Image();
        loadImage.src = "eyecatcher-7/things/" + spaceThings[i] + ".png";
    }

    // whiskey secret
    let loadImage = new Image();
    loadImage.src = "eyecatcher-7/things/stegg.png";

    console.log("loaded space objects");
}

function createSpaceThing(thing) {
    let spaceThing = new Image();
    spaceThing.src = getSpaceThingPath(thing);
    spaceThing.setAttribute("style", "animation: spinObject linear infinite; position: fixed; top:" + (Math.floor(Math.random() * 95)) + "%; animation-duration: " + (Math.floor(Math.random() * 5) + 1) + "s");
    return spaceThing;
}

function createRandomSpaceThing() {
    let spaceThing = new Image();
    let randomSpaceThing = spaceThings[Math.floor(Math.random() * spaceThings.length)];
    spaceThing.src = getSpaceThingPath(randomSpaceThing);
    spaceThing.setAttribute("style", "animation: spinObject linear infinite; position: fixed; top:" + (Math.floor(Math.random() * 95)) + "%; animation-duration: " + (Math.floor(Math.random() * 5) + 1) + "s");

    if (randomSpaceThing === 'whiskey') {
        spaceThing.onclick = function() {
            placeFloatingSpaceThing(mainAnimationContainer, createSpaceThing('stegg'));
        }
    }

    return spaceThing;
}

// DIV OBJECTS, ANIMATIONS //

var mainAnimationContainer = document.createElement("div");

function createAnimatedDiv(animName, duration) {
    let animatedDiv = document.createElement("div");
    animatedDiv.setAttribute("style", "position: fixed; animation-name: " + animName + "; animation-duration: " + duration + "s; animation-timing-function: linear");
    return animatedDiv;
}

function placeFloatingSpaceThing(container, thing) {
    let animatedDiv = createAnimatedDiv("moveObjectAcross", (Math.floor(Math.random() * 10) + 1));
    container.appendChild(animatedDiv);
    animatedDiv.appendChild(thing);
    animatedDiv.onanimationend = function() {
        console.log("animation complete, removing");
        animatedDiv.remove();
    }
}

// LOOPS, ASYNC SLEEP, INIT //

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainLoop() {
    placeFloatingSpaceThing(mainAnimationContainer, createRandomSpaceThing());
    await sleep((Math.floor(Math.random() * 5) + 1) * 1000);
    mainLoop();
}

function init() {
    loadSpace();
    loadSpaceThings();
    document.body.appendChild(spaceBackground);
    document.body.appendChild(mainAnimationContainer);
}

init();

window.onload = function() {
    drawSpace();
    mainLoop();
}

window.onresize = drawSpace; // just in case it's viewed in a regular browser window
