function getAMPMTime(date) {
    let current24HTime = [ date.getUTCHours(), date.getUTCMinutes() ];
    if (current24HTime[1] < 10) { current24HTime[1] = "0" + current24HTime[1] }; // hmm!!!
    if (current24HTime[0] === 12) {
        return current24HTime[0] + ":" + current24HTime[1] + "pm";
    } else if (current24HTime[0] === 0) {
        return 12 + ":" + current24HTime[1] + "pm";
    } else if (current24HTime[0] > 12) {
        return (current24HTime[0] - 12) + ":" + current24HTime[1] + "pm";
    } else if (current24HTime[0] < 12) {
        return current24HTime[0] + ":" + current24HTime[1] + "pm";
    }
}

function getFullDate(offset) {
    var UTCdate = new Date(Date.now() + offset);
    return (UTCdate.getUTCMonth() + 1) + "/" + UTCdate.getUTCDate() + "/" + UTCdate.getUTCFullYear() + " " + getAMPMTime(UTCdate);
}

function fullDateToString() {
    document.getElementById("time").innerHTML = getFullDate(-28800000) + " PST";
}

fullDateToString();
setInterval(fullDateToString, 60000);

document.getElementById("addcart").onclick = function() {
    document.getElementById("addcart").innerHTML = "sold out";
    document.getElementById("addcart").setAttribute("style", "background-color: white; color: #999999; border: 1px solid #999999")
}
