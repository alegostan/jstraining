const block = document.getElementsByClassName("blk")[0];
const container = document.getElementById("container");
const timerContainer = document.getElementById("timer-container");

tileCount = Math.floor(
    (window.innerWidth / block.offsetWidth) *
        (window.innerHeight / block.offsetHeight)
);

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
        event.target.style.border = "3px solid white";
        event.target.style["boxShadow"] =
            " 1px 1px 96px 51px rgba(255,255,255,0.75)";
    });
    item.addEventListener("mouseout", function (event) {
        event.target.style.border = "3px solid rgb(26, 26, 26)";
        event.target.style["boxShadow"] = "none";
    });
}

renderTime();
function renderTime() {
    now = new Date();
    const divider = now.getSeconds() % 2 === 0 ? " " : ":";
    timerContainer.innerHTML =
        now.getHours() +
        divider +
        (now.getMinutes() < 10 ? "0" : "") +
        now.getMinutes();
}
const mainTimer = setInterval(renderTime, 1000);
