function makeIterator (start = 0 , end = Infinity  , step = 1){
    let nextStep  = start;
    let iteratorCount = 0
    return{
        next(){
        if(nextStep < end){
            let result =  {value : nextStep , done :false}
            nextStep+=step
            iteratorCount++
            return result    
        }
        else{
            return {value : undefined , done : true}
        }
    }
    } 
}

let input = "5:10:3"
let num = input.split(":")
let start = Number(num[0])
let numOfSteps = Number(num[1])
let steps = Number(num[2])

const iterator = makeIterator(start,numOfSteps,steps)
let result = iterator.next()
while(!result.done){
    console.log(result.value)
    result = iterator.next()
}

