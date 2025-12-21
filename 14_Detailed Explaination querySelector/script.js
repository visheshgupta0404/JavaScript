/*querySelector - selects First Element

using-
    tag name
    id #
    class .
*/

const ele = document.getElementById("username") //fetch same as query selector
console.log(ele.innerText = "Your Name")

ele.classList.add("red_color")
ele.classList.add("underline")
console.log(ele.classList) //prints all the class that present inside it


ele.classList.remove("underline") //removes the class name red_color
console.log(ele.classList)


ele.style.textDecoration = "underline" //adds underline without adding in css using JavaScript
ele.style.color = "yellow"
ele.parentElement.style.backgroundColor = "grey" //Makes the changes in parent element also 


ele.setAttribute("Vishesh","4406") //makes a new attribute (name,value)
console.log(ele.attributes) //shows all attributes include name="Vishesh"


// ele.remove() // removes whole ele tag



