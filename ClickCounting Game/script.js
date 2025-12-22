console.log("I am ready to count the countings")

const button = document.getElementById("button")
const container = document.getElementById("container")
let count = 1
button.addEventListener("click",()=>{
    
    const ele = document.createElement("li")
    ele.innerText=count
    container.appendChild(ele)
    count++ 
})
