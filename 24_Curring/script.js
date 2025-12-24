function add(a){
    return function(b){
        return function(c){ 
            console.log(a+b+c)
        }
    }
}

add(1)(2)(3)

const addnum = (a) => (b) => (c) => a+b+c

let sum = addnum(1)(2)(3)
 console.log(sum)



 function sendEmail(to){
    return function(subject){
        return function(body){
            return function(regards){
                console.log(`Sending Email to ${to} with the subject ${subject} : ${body} Regards ${regards}`)
            }
        }
    }
 }

sendEmail("visheshg990@gmail.com")("Appretiation")("Thanks for giving such a nice repo")("Your Student")

const sendingEmail = (to) => (subject) => (body) => (regards)=> `Sending Email to ${to} with the subject ${subject} : ${body} Regards ${regards}`
let step1 =sendingEmail("visheshg990@gmail.com")
let step2 = step1("Appretiation")
let step3= step2("Thanks for giving such a nice repo")
let step4 = step3("Your student")
console.log(step4)
