const block = document.getElementsByClassName("blk")[0];
const container = document.getElementById("container");
const timer = document.getElementById("timer");

const timeBtn = document.getElementById("btn-time");
const dateBtn = document.getElementById("btn-date");
const startBtn = document.getElementsByClassName("stopwatchBtn")[0];
const stopBtn = document.getElementsByClassName("stopwatchBtn")[1];

timerType = "time";
var startTime = 0;
var isStopped = true;

var mainTimer = setInterval(renderTime, 1000);
const stopwatchTimer = undefined;

timeBtn.addEventListener("click", () => {
    timerType = "time";
    clearInterval(mainTimer);
    mainTimer = setInterval(renderTime, 1000);
    renderTime();
});
dateBtn.addEventListener("click", () => {
    timerType = "date";
    renderTime();
});
startBtn.addEventListener("click", () => {
    if (!isStopped) {
        return;
    }
    timerType = "stop";
    clearInterval(mainTimer);
    mainTimer = setInterval(renderTime, 10);
    startTime = new Date().getTime();
    isStopped = false;
    renderTime();
});
stopBtn.addEventListener("click", () => {
    if (isStopped) {
        isStopped = false;
        clearInterval(mainTimer);

        stopBtn.style.background = "inherit";
        mainTimer = setInterval(renderTime, 10);
    } else {
        clearInterval(mainTimer);
        stopBtn.style.background = "red";
        isStopped = true;
    }
    console.log("stop");
    renderTime();
});

function calculateTiles() {
    const tilesPerRow = window.innerWidth / block.offsetWidth;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const tilesPerCol = tilesPerRow / aspectRatio;
    return Math.floor(tilesPerRow * tilesPerCol + 10);
}

draw(calculateTiles());

function draw(count) {
    for (var i = 0; i <= count; i++) {
        container.insertAdjacentHTML("beforeend", '<div class="blk"></div>');
    }
}
const blocks = document.querySelectorAll(".blk");

for (var item of blocks) {
    item.addEventListener("mouseover", function (event) {
        event.target.style.border = "3px solid darkgray";
        event.target.style["boxShadow"] =
            "1px 1px 96px 51px rgba(255,255,255,0.75)";
        event.target.style["z-index"] = 2;
    });
    item.addEventListener("mouseout", function (event) {
        event.target.style.border = "3px solid rgb(26, 26, 26)";
        event.target.style["boxShadow"] = "none";
        event.target.style["z-index"] = 1;
    });
}

renderTime();
function renderTime() {
    now = new Date();
    switch (timerType) {
        case "time": {
            const divider = now.getSeconds() % 2 === 0 ? " " : ":";
            timer.innerHTML =
                now.getHours() +
                divider +
                (now.getMinutes() < 10 ? "0" : "") +
                now.getMinutes();

            timer.style["font-size"] = "inherit";
            return;
        }
        case "date": {
            timer.innerHTML = now
                .toISOString()
                .split("T")[0]
                .split("-")
                .join(" ");

            timer.style["font-size"] = "50px";
            return;
        }
        case "stop": {
            timer.innerHTML = getEllapasedTime();
            return;
        }
    }
}

function getEllapasedTime() {
    var now = new Date();
    return msToTime(now.getTime() - startTime);
}
function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;

    return secs + "." + (ms < 10 ? "0" : "") + (ms < 100 ? "0" : "") + ms;
}
