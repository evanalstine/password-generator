const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = []
let hasFirstPassword = false
let secondPassword = []
let hasSecondPassword = false
let pwOne= document.getElementById('pw-one')
let pwTwo = document.getElementById('pw-two')
let generatePasswords = document.getElementById('generate-btn')

generatePasswords.addEventListener("click", createPWs) 

function createPWs() { 
    if (hasFirstPassword === false && hasSecondPassword === false) {
    generatePasswordOne()
    generatePasswordTwo()
    } else if (hasFirstPassword && hasSecondPassword) {
        firstPassword = []
        secondPassword= []
        pwOne.textContent = ""
        pwTwo.textContent = ""
        generatePasswordOne()
        generatePasswordTwo()
    }
}    

function generatePasswordOne() {    
    for (let i = 0; i < 15; i++){
        let digit = characters[Math.floor(Math.random() * characters.length)] 
        firstPassword.push(digit)         
     } console.log(firstPassword)
        hasFirstPassword = true
     for (let i = 0; i <firstPassword.length; i++) {
        pwOne.textContent += firstPassword[i]        
     }  
}   console.log(firstPassword)

function generatePasswordTwo() {    
    for (let i = 0; i < 15; i++){
        let digit = characters[Math.floor(Math.random() * characters.length)] 
        secondPassword.push(digit)         
     } console.log(secondPassword)
        hasSecondPassword = true
     for (let i = 0; i <secondPassword.length; i++) {
        pwTwo.textContent += secondPassword[i]        
     }
}


            
            



