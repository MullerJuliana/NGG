
//Generate Random Number 
    let randomNumber = Math.floor(Math.random()*25)+1

//Get HTML elements

    //The "Guess a Number" text
    let pText = document.getElementById("text");
    //The input Box in where you put the number
    let inputBox = document.getElementById("box");
    //The Submit button 
    let inputSubmit = document.getElementById("submit");


//function 
function checkUserGuess() {
    
    let userGuess = parseInt(inputBox.value);

    if (userGuess === randomNumber){
        pText.style.color = "#82b84b";
        pText.textContent = "CONGRATS! You Got It :D";
    }
    
    else if (userGuess > randomNumber){
        pText.style.color = "#ed3472";
        pText.textContent = "Try again, The number is too High!";
    }
    
    else if (userGuess < randomNumber){
        pText.style.color = "#ed3472";
        pText.textContent = "The Number is too Low, Try again!";
    }   
    
    else if (userGuess > 25){
        pText.style.color = "#ed3472";
        pText.textContent = "Careful! Number is over 25.";
    }
}       

//Event listener to be able to press Submit
inputSubmit.addEventListener("click", checkUserGuess);

pText.textContent = "Guess a number between 1 and 25 to see if its correct";
