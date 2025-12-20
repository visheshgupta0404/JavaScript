console.log("Hey Everyone Today we are studying the Higher Order Functions in an Array");

const randomNumbers = [1, 23, 42, 32, 48, 27, 91, 111];
// Basically it is like others forEach loop in this it passes the value of each index to new function as value val we can directly use it or modify it and also it doesn't make changes in the Array

randomNumbers.forEach((val) => console.log(val));
randomNumbers.forEach((val) => console.log(val ** 2)); //It prints the Square of every number

// .map is also  used as same but in this it passes the valves to the new Array
// It uses when we want to  make new Array with changes

let squareArray = randomNumbers.map((val) => val ** 2); //It passes the new value that we can store in the new Array
console.log(squareArray);

// .filter helps to filter out the Array bassed on the certain conditins

let evenArray=randomNumbers.filter((val)=> val%2==0) //Passes new value that satisfied the given condition
console.log(evenArray)


let search = randomNumbers.find((num)=>num===42) //Passese the same valve if present if not then undefined 
console.log(search)


let searchindex = randomNumbers.findIndex((num)=> num===12) //passes  the index if value matches otherwise pass -1
console.log(searchindex)


console.log(randomNumbers.includes(42))//prints true if present else false


const slicedArray = randomNumbers.slice(2,5)//slice the given Array from (start_index,end-1_index)
console.log(slicedArray)

const splicedArray = randomNumbers.splice(1,3) //Trim/Pop those index elements from the f=given array and passes  the new array
console.log(splicedArray) //Trimed/poped Array
console.log(randomNumbers) // Array after trimed values


//In this repo we learned all the most common functions that we use while making the projects rest all we learn while builing our Project.
