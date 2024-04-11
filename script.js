const block=document.querySelector('.block')
const x=document.querySelector('.textX')
const y=document.querySelector('.textY')

block.addEventListener('mousemove',function(event){
    x.innerText=event.clientX
    y.innerHTML=event.clientY
})