const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"
,"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numerals = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function genPasswords(){
    // Set default characters
    let tempArray = characters

    // Set length of password
    let passwordLength = document.getElementById("characters").value
    if (!passwordLength){ passwordLength = 15}
    
    // Declare and initialize passwords
    password1.textContent = ""
    password2.textContent = ""
    
    // Extra characters setting switches
    if(document.getElementById('useNumeral').checked) {
        tempArray = tempArray.concat(numerals)
    } 

    if(document.getElementById('useSymbol').checked) {
        tempArray = tempArray.concat(symbols)
    }

    // Generate passwords
    for(let i = 0; i < passwordLength; i++){
        console.log(tempArray.length)
        index = Math.floor(Math.random() * tempArray.length)
        password1.textContent += tempArray[index]
    }
    console.log("right")
    for(let i = 0; i < passwordLength; i++){
        index = Math.floor(Math.random() * tempArray.length)
        password2.textContent += tempArray[index]
    }
    
}

function copyToClipboard(password){
    if (document.getElementById(password).textContent == ""){
        return
    }
    let textToCopy = document.getElementById(password).textContent

    var TempText = document.createElement("input")
    TempText.value = textToCopy;
    document.body.appendChild(TempText)
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText)
  
    alert("Copied the text: " + TempText.value)
}
