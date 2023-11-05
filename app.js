const block = document.getElementById('blk')
const container = document.getElementById('container')

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
        event.target.style.border = '3px solid red'
        event.target.style["boxShadow"] = " 1px 1px 96px 51px rgba(255,255,255,0.75)"
    })
    item.addEventListener('mouseout', function(event){
        event.target.style.border = '3px solid rgba(160, 160, 0, 0.088)'
        event.target.style["boxShadow"] = "none"
    })

}



