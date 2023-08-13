
  // <script>
  const inputText = document.getElementById('inputText');
  const displayTextButton = document.getElementById('displayTextButton');
  const displayedText = document.getElementById('displayedText');
function changeTextColor() {
    const colors = ['orange', 'blue', 'green'];
    let currentIndex = 0;
    
    setInterval(() => {
      displayedText.style.color = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 2000); // Change color every 5 seconds
  }
  
  changeTextColor();
  displayTextButton.addEventListener('click', () => {
    const enteredText = inputText.value;
    let newText = "HAPPY INDEPENDENCE DAY ";
   if (enteredText.toLowerCase() === "sai mahendra") {
      newText += "WORLD FAMOUS DEV";
    } else if (enteredText.toLowerCase() === "ravindra prasad") {
      newText += "THATHA ";
    } else if (enteredText.toLowerCase() === "anasuya") {
      newText += "MOM";
    } 
    else if (enteredText.toLowerCase() === "hari babu") {
      newText += "DAD";
    }
    
    else if (enteredText.toLowerCase() === "raj kumar") {
      newText += " inka musukoni chadhuko 😜😵‍💫🤣";
    }
    
    else if (enteredText.toLowerCase() === "rithesh") {
      newText += "bunti";
    }
    
    else if (enteredText.toLowerCase() === "prudhvi") {
      newText += "prudhvi pinni";
    }
    
    else if (enteredText.toLowerCase() === "hema") {
      newText += "hema pinni";
    }
    
    else if (enteredText.toLowerCase() === "suhitha") {
      newText += "😎";
    }
    
    else if (enteredText.toLowerCase() === "srihitha") {
      newText += "😁";
    }
    
    else if (enteredText.toLowerCase() === "viswajith" ||enteredText.toLowerCase() === "sudheer kumar" ) {
      newText += "my friend ";
    }
    else {
      newText += enteredText+"😊 🧡🤍💚";
    }
    displayedText.textContent = newText;
  });
