const block = document.getElementById('blk')
const container = document.getElementById('container')
var columns = Math.floor(100 / 6)

console.log(columns)
draw(1000)

function draw (count){
    for (var i = 0; i <= count; i++)
    {
        container.insertAdjacentHTML("beforeend", '<div class="blk"></div>')
        console.log("element")
    }
}