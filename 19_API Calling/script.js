console.log("Today we are learning about the API Calling")

const cityName = document.getElementById("city-name")
const clickButton = document.getElementById("clickButton")
const time = document.getElementById("time")
const place = document.getElementById("location")
const temp = document.getElementById("tempc")


async function getData(value){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=ff094cd206494d00bad115207252312&q=${value}&aqi=yes
`)
    return await promise.json()
}

clickButton.addEventListener("click",async ()=>{
    const data =await  getData(cityName.value)
    console.log(data)
    place.innerText = `City name: ${data.location.name} , Region: ${data.location.region} , Country: ${data.location.country}`
    time.innerText=`Current date and time is : ${data.location.localtime}`
    temp.innerText=`Temperature : ${data.current.temp_c}`
})

