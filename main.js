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
     number++
     if (number === 5) {
          notAgreeBtn.setAttribute("disabled" , "")
     }
}

function startMove() {
     setTimeout(move , 1000)
}

notAgreeBtn.addEventListener("click" , move)
agreeBtn.addEventListener("click" , () => screens[1].classList.add("up"))
startBtn.addEventListener("click" , () => screens[0].classList.add("up"))


var text = "Tại vì cậu rất là đẹp trai í<3"
var send = document.querySelector(".send")
var inputBox = document.querySelector(".input")
var myIndex = 0
var number = 0


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




// Button Ripple Effect
var allBtns = document.querySelectorAll(".btn")
allBtns.forEach(btn => {
     btn.addEventListener("click" ,function(e) {

          var x = e.clientX
          var y = e.clientY
                
          var buttonTop = e.target.offsetTop
          var buttonLeft = e.target.offsetLeft

          var xInside = x - buttonLeft
          var yInside = y - buttonTop

          var circle = document.createElement("span")
          circle.classList.add("circle")
          circle.style.top = yInside + "px"
          circle.style.left = xInside + "px"
                
          this.appendChild(circle)

          setTimeout(() => this.removeChild(circle) , 500)

     })
})