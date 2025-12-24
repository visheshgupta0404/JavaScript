function add(a,b){
    return a+b
}
function multiply(a,b){
    return a*b
}
function square(a){
    return a*a
}

function composition(fun1,fun2){
    return function (a,b) {
        return fun2(fun1(a,b))
    }
}


let result = composition(multiply,square)(2,3)
console.log(result)

const Comp =(fun1,fun2) => (a,b) => fun2(fun1(a,b))
console.log(Comp(add,square)(2,3))