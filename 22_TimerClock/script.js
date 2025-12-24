const button  = document.getElementById("clickButton")
function displayTime(){
    let currentTime = new Date() //provides the current day date and time
    let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    const show_time = document.getElementById("timer")
    show_time.innerText= time
}
setTimeout(()=>{console.log("This is only run once"),5000}) //This is only run once and in the given time in milliseconds

const interval = setInterval(displayTime,1000) //runs infinitely in the given interval in milliseconds
button.addEventListener("click",()=>{
    clearInterval(interval) //clear the interval
})

