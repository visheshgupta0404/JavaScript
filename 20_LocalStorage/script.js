const input = document.getElementById("input")
const button= document.getElementById("clickButton")
const uname =document.getElementById("username")

button.addEventListener("click",()=>{
    const name =input.value //get the value
    localStorage.setItem("name",name) //set the value to the LocalStorage  
    location.reload() //Automatically reload the the whereever it is
    //Without this we have to manually load the page to refresh value
    
})

//Works only when we loads the page
window.addEventListener("load",()=>{
    uname.innerText = localStorage.getItem("name") //get the value with the help of item name


})

console.log(name)