var mainBox = document.querySelector(".main-box")
var okayBtn = document.querySelector(".okay")
var noBtn = document.querySelector(".no")

var startBtn = document.querySelector(".js-start")
var screens = document.querySelectorAll(".screen")

function getRandomPosition() {
     var x = Math.floor(Math.random() * mainBox.clientWidth)
     var y = Math.floor(Math.random() * mainBox.clientHeight) 

     x = x + noBtn.offsetWidth > mainBox.clientWidth ? x - noBtn.offsetWidth : x 
     y = y + noBtn.offsetHeight > mainBox.clientHeight ? y - noBtn.offsetWidth : y 

     return { x , y }
}

startBtn.addEventListener("click" , () => screens[1].classList.add("up"))


var number = 0
function move() {
     var { x , y } = getRandomPosition()

     noBtn.style.left = x + "px"
     noBtn.style.top  = y + "px"
     number++
}

function disableBtn() {
     if (number === 7) {
          noBtn.removeEventListener("click" , move , false)
     }
}
disableBtn()

noBtn.addEventListener("click" , move)
okayBtn.addEventListener("click" , () => screens[2].classList.add("up"))


var text = "Tại vì cậu rất là đẹp trai í<3 hihi"
var send = document.querySelector(".js-send")
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
     } else {
          screens[3].classList.add("up")
     }
})


inputBox.addEventListener("input" , write)
