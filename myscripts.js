const outputDiv= document.getElementById("outputContainer")
const myArray =["Katt", "Hund", "Esel"]
const inputAnimal= document.getElementById("inputAnimal")
let chosenAnimal=""
function randomAnimalGenerator(){
     chosenAnimal= myArray[Math.floor(Math.random()*myArray.length)]  
     console.log(chosenAnimal)
     assignAnimal()
    
}
function assignAnimal(){
    outputDiv.innerHTML= chosenAnimal
}

function addAnimal(){
myArray.push(inputAnimal.value)
console.log(myArray)
}

