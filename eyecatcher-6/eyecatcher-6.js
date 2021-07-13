var userAgent = navigator.userAgent
userAgent = userAgent.split(" ");

function insertIntoDetectionGrid(type, result) {
    let newType = document.createElement("p");
    let newDot = document.createElement("p");
    let newResult = document.createElement("p");

    newType.innerHTML = "Detecting " + type;
    newDot.innerHTML = "...";
    newResult.innerHTML = result;

    document.getElementById("detectionType").appendChild(newType);
    document.getElementById("dotcolumns").appendChild(newDot);
    document.getElementById("result").appendChild(newResult);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayAdditionInElement(elementId, addto, addend) {
    for (let i = 0; i < addto; i = i + addend){
        document.getElementById(elementId).innerHTML = i;
        await sleep(20);
    }
}

function unhide(elementId) {
    document.getElementById(elementId).setAttribute("style", "display: block");
}

async function loadBIOS() {
    await sleep(2000);
    unhide("cpu");
    await sleep(2000);
    unhide("memtest");
    await displayAdditionInElement("memtestnum", 4098, 2);
    document.getElementById("memtestnum").innerHTML = document.getElementById("memtestnum").innerHTML + " OK";
    unhide("keyinterrupts");
    await sleep(2000);
    insertIntoDetectionGrid("Webhost", "neocities.org")
    await sleep(2000);
    insertIntoDetectionGrid("OS", navigator.platform);
    await sleep(2000);
    insertIntoDetectionGrid("Browser", userAgent[userAgent.length - 1]);
    await sleep(10000);
    unhide("error");
    document.getElementById("fox").setAttribute("onclick", "document.body.innerHTML = 'No boopable snout detected!'")
}

loadBIOS();
