const block = document.getElementById('blk')
const container = document.getElementById('container')
const timerContainer = document.getElementById('timer-container')


draw(1000)

function draw (count){
    for (var i = 0; i <= count; i++)
    {
        container.insertAdjacentHTML("beforeend", '<div class="blk"></div>')
        console.log("element")
    }
}
const blocks = document.querySelectorAll('.blk')

for (var item of blocks){
    item.addEventListener('mouseover', function(event){
        event.target.style.border = '3px solid white'
        event.target.style["boxShadow"] = " 1px 1px 96px 51px rgba(255,255,255,0.75)"
    })
    item.addEventListener('mouseout', function(event){
        event.target.style.border = '3px solid rgb(26, 26, 26)'
        event.target.style["boxShadow"] = "none"
    })
}

renderTime()
function renderTime()
{
    now = new Date()
    const divider = now.getSeconds()%2 === 0 ? ' ' : ':'
    timerContainer.innerHTML = now.getHours() + divider + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
    console.log(now.getHours() + divider + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes())
}
const mainTimer = setInterval(renderTime, 1000)




