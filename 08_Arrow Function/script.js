// Here we are using the Arrow function(=>)
console.log("Hey are you able to see me");


//Here we only has to give the fixed numbers of parameters
const add= (a,b) =>{
    return a+b
}
let ans = add(10,20)
console.log("The sum of numbers is",ans)

// Here we use the dynamic nature of parameters
const addition=(...num)=>{
    let sum=0
    for(let i = 0 ; i<num.length;i++){
        sum+=num[i]
    }
    return sum;
}

let totalsum = addition(10,20,30,40,50)
console.log(totalsum)