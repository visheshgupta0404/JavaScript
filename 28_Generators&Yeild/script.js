/**
  Normal functions can be used inside loops.
 Generator functions (function*) are used when we want to
 generate multiple values one at a time and iterate over them,
 usually using a for...of loop.
 */

function* CustomIterator(start , end , step){
    for(let i=start;i<end ; i+=step){
        yield i;
    }
}
const iterator = CustomIterator(5,10,2)
let result = iterator.next()


while(!result.done){
    console.log(result.value)
    result = iterator.next()
}