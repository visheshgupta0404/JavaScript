console.log("Today we are working on the making of the Dynamic Elements")

var name = prompt("What is your name?","Enter your name")
alert("Hey "+name)

const button = document.getElementById("click")
const container = document.getElementById("container")

button.addEventListener("click",()=>{
    const ele = document.createElement("h1")
    ele.innerText=name
    container.appendChild(ele)
    
})
 