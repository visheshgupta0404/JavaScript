console.log("Makimg timer in using this code")
let sec =0
const timerButton = document.getElementById("timerButton")


timerButton.addEventListener("click",()=>{
    const stoptime = document.getElementById("userTime")
    console.log(stoptime.value)
    sec =stoptime.value
    const count = document.getElementById("stopWatch")
    count.innerText= sec

    
    const stop =setInterval(()=>{
        count.innerText= sec-1
        sec--
    },1000)


    setTimeout(()=>{
        clearInterval(stop)
        sec=0
        count.innerText= sec
    },(Number(stoptime.value)*1000)) 

})