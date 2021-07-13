const maxIcons = self.innerWidth / 10; // arbitrary decision for this ratio, based on original 500x500 height of eyecatcher box
const iconText = [
    "knotzone.xxx",
    "New Folder (???)",
    "TotallyNotAVirusTrustMe.bat",
    "lizardhub.com",
    "Space Station 95",
    "nuts.wad",
    "Untitled.txt",
    "con",
    "fox (???).bmp"
];

var currentIconAmount = 0

function generateWin95Icon() {
    let iconDiv = document.createElement("div");
    iconDiv.id = "win95icon";
    iconDiv.setAttribute("onclick", "this.remove()");

    let newIcon = document.createElement("img");
    newIcon.src = "eyecatcher-2/icon" + Math.floor(Math.random() * 18) + ".png";

    let newIconText = document.createElement("span");
    newIconText.innerHTML = iconText[Math.floor(Math.random() * iconText.length)];

    iconDiv.appendChild(newIcon);
    iconDiv.appendChild(newIconText);
    currentIconAmount = currentIconAmount + 1;
    return iconDiv;
}

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

while (currentIconAmount < maxIcons) {
    let currentIcon = generateWin95Icon();
    currentIcon.style.top = Math.floor(Math.random() * 100) + "%";
    currentIcon.style.left = Math.floor(Math.random() * 100) + "%";
    document.getElementById("mainContainer").appendChild(currentIcon);
}

document.getElementById("tray-time").innerHTML = getAMPMTime();
setInterval(function() { document.getElementById("tray-time").innerHTML = getAMPMTime(); }, 60000 );
