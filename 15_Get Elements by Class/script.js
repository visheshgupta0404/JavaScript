console.log("Today we are studing about the getElementsByClass");
let ele = document.getElementsByClassName("block")
console.log(ele) //returns all the class using class block
for(let  i = 0 ; i <ele.length;i++){
    console.log(ele.item(i).innerText)//prints the data seperately
}
for(let  i = 0 ; i <ele.length;i++){
    console.log(ele.item(i).style.color ="red")//prints the data seperately
}
let rem = document.getElementsByClassName("remove")
console.log(rem[0]) //it get removed
rem[0].classList.remove("remove")
console.log(rem[0])




