const block = document.getElementsByClassName("blk")[0];
const container = document.getElementById("container");
const timer = document.getElementById("timer");

const timeBtn = document.getElementById("btn-time");
const dateBtn = document.getElementById("btn-date");
//const stopBtn = document.getElementById("btn-stopwatch");

timerType = "time";

timeBtn.addEventListener("click", () => {
    timerType = "time";
    renderTime();
});
dateBtn.addEventListener("click", () => {
    timerType = "date";
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
    }
}
const mainTimer = setInterval(renderTime, 1000);
