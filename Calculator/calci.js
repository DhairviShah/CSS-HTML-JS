console.log("welcome to virtual calculator!!");
let screen = document.getElementById("screen"); //take screen
let buttons= document.querySelectorAll("button");// considering all buttons
let screenValue = " ";
 for (item of buttons) {
     
     item.addEventListener('click', (e) => {
         
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if(buttonText == "X"){                  // intializing meaning of multiplication
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
        else if(buttonText == "C"){             // intializing meaning of clear
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){             // intializing meaning of equal to
           
            screen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }

    })
} 