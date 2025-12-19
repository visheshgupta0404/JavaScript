console.log("This is higher order function tutorial");
//Basically it is a fuctions which takes another functions as the output of the first/input funnctions
//Here I use cb as CallBack you can use anything
function add(a, b, cb) {
  let total = a + b;
  // console.log(result)
  return () => console.log(total);
}

let returnFunction = add(5, 10, undefined);
returnFunction();

//Here we make the new returnFunctions in the return
//we can also make the higher order function in which we make or call the new function inside the running function


function marks(num1, num2,result){
    let totalMarks=num1+num2
    result(totalMarks)
}
marks(10,20,(result1)=> {
    console.log(result1)
})