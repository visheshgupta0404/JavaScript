console.log("Today we are going to learn about the Event Listeners")

function ClickButton() {
    console.log("Hey buddy you clicked button 2")
}

let ele = document.getElementById("onclick")
// ele.onclick = function() {
//     alert("By Click you got Hacked!!")
//     console.log("You clicked a alert button")}


//By addEventListener you an  use many script tag all are working simultaneously
//Without EventListener only the last script is going to run overloading occur


ele.addEventListener("click" ,  function(){
    console.log("You clicked a button")
})

let allChildren = document.querySelector("body").children
console.log(allChildren)

for(let i = 0 ; i<allChildren.length ; i++){
    allChildren.item(i).addEventListener("click",() =>{
        allChildren.item(i).remove()
    })
}


