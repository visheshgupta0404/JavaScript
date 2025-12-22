console.log("Heyy Welcome to my Color Changing Game")
const ele = document.getElementById("ClickButton")
const but = document.getElementById("but")
console.log(ele.style.color = "red")

but.addEventListener("click",()=>{
    if(ele.style.color === "red"){
        ele.style.color = "blue"
    }
    else{
        ele.style.color ="red"
    }
})

