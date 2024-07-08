var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")
var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.3
})

tl.from("#full h1",{
    x:150,
    duration:0.3,
    stagger:0.15,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
// var h1 = document.querySelector("#bhapp h6")
// var h1Text = h1Text.textContent
// var splittedText = h1Text.split("")

// var clutter =""

// splittedText.forEach(function(elem){

//     clutter += `<span>${elem}</span>`
// })

// h1.innerHTML = clutter
// console.log(splittedText)
gsap.from("h6 span",{
    y:80,
    opacity:0,
    duration:1,
    delay:0.5,
    repeat:2,
    stagger:0.1
})

gsap.from("h2",{
    y:80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.1
})
