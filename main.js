var mainContainer = document.querySelector(".main-container")
var agree = document.querySelector(".agree")
var notAgreeBtn = document.querySelector(".notAgree")
var agreeBtn = document.querySelector(".agree")
var startBtn = document.querySelector(".start")
var screens = document.querySelectorAll(".screen")

function getRandomPosition() {
     var x = Math.floor(Math.random() * mainContainer.clientWidth)
     var y = Math.floor(Math.random() * mainContainer.clientHeight) + 47

     x = x + notAgreeBtn.offsetWidth > mainContainer.clientWidth ? x - notAgreeBtn.offsetWidth : x 
     y = y + notAgreeBtn.offsetHeight > mainContainer.clientHeight ? y - notAgreeBtn.offsetWidth : y 

     return { x , y }
}


function move() {
     var { x , y } = getRandomPosition()

     notAgreeBtn.style.left = x + "px"
     notAgreeBtn.style.top  = y + "px"
}

function startMove() {
     setTimeout(move , 3500)
}

notAgreeBtn.addEventListener("mouseover" , move)
agreeBtn.addEventListener("click" , () => screens[1].classList.add("up"))
startBtn.addEventListener("click" , () => screens[0].classList.add("up"))


var text = "Tại vì cậu rất là đẹp trai í<3"
var send = document.querySelector(".send")
var inputBox = document.querySelector(".input")
var myIndex = 0

function write() {
     inputBox.value = text.slice(0 , myIndex)
     myIndex++
     if (myIndex > text.length + 5) {
          myIndex = 0
     }
}

send.addEventListener("click" , function(e) {
     if (myIndex < 26) {
          e.preventDefault()
     }
})

inputBox.addEventListener("input" , write)