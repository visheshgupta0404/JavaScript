console.log("Toaday we are going to learn about the CLOSURE")
function addto(num){
    function add(b){
        console.log(num+b)
    }
    return add
}
let addto5 = addto(5)
console.log(addto5(5))


let addto17 = addto(17)
console.log(addto17(3))



const myName = document.getElementById("my_name")
function textSize(size){
    return () =>{

        myName.style.fontSize=`${size}px`
    }
}

let size12 = textSize(12);
let size20 = textSize(20)
let size50= textSize(50)

const button = document.getElementById("changeSize")
let count = 0
button.addEventListener("click",() =>{
    if(count===0){
        size12()
        count++
    }
    else if(count === 1){
        size20()
        count++
    }
    else if(count === 2){
        size50()
        count=0
    }
}) 
