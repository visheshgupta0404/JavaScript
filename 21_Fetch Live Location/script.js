const button = document.getElementById("clickButton")
const loc = document.getElementById("loc")
const dateTime = document.getElementById("currentTime")
const temp = document.getElementById("temp")
async function gotPosition(position){
    console.log(position)
    
    var longitude = position.coords.longitude
    var latitude = position.coords.latitude
    searchLoction(longitude,latitude)
    
}
async function searchLoction(longitude,latitude){
        const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=ff094cd206494d00bad115207252312&q=${latitude},${longitude}&aqi=yes`)
        const data = await getData.json()
        console.log(data)
        loc.innerText=`You are currently at ${data.location.name} and in the region ${data.location.region} and in the country ${data.location.country}`
        dateTime.innerText=`Current Date and current time : ${data.location.localtime} `
        temp.innerText=`Current Temperature is : ${data.current.temp_c}`
    } 
function failedToGet(){
    console.log("Not able to get location")
}
button.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(gotPosition,failedToGet)

})
