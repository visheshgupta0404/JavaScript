console.log("Today lets learn about promises in JavaScript")

/**
 There are two types of functions 
 1> Sync
 2> Async

 Sync functions are those we runs line by line from ttop to bottom if the upper  code takes time in that time the code below them waits until that code can finished
 Async funtions are those which allows lower code to run in between it runs and when the async runs completely then it prits
 */

//  await uses only with the async funtions 
// fetch helps to get the data from the URL
let a =10
let b = 20
let result = a+b

async function colllectingData(){   
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(await data.json())
}

colllectingData()
console.log(result)