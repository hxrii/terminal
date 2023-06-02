const InputField = document.getElementById('textEnter');

InputField.addEventListener('input', function(event) {
    if (event.target.value == 'help') {
      help();
    }
    else
    {
        deletefn();
        const terminalHead = document.getElementById("terminal-top");
        const text2 = ">>";
        terminalHead.textContent = text2;
    }
  });

function help() {
    const terminalHead = document.getElementById("terminal-top");
    const text2 = "Home/help $";
    terminalHead.textContent = text2;
    

    
    
    const text1 = "<h4 id = 'Firsttxt'> </h4> <br> <h4>intro -> Introduction</h4>";
    
    let text = "Commands List"
    const baseDiv = document.getElementById("typingEffect");
    baseDiv.innerHTML=text1; 

    let typingEffect = document.getElementById("Firsttxt");
    
    let charIndex = 0;
    function typeText() {

        while (charIndex < text.length) {
          typingEffect.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 10);
        }
      }
      
      typeText();

}

function deletefn(){
        const typingEffect = document.getElementById("typingEffect");
        const text = typingEffect.textContent;
        const reversedText = text.split("").reverse().join("");
        typingEffect.textContent = "";
      
        let charIndex = 0;
        function removeCharacter() {
          if (charIndex < reversedText.length) {
            typingEffect.textContent = reversedText.slice(charIndex);
            charIndex++;
            setTimeout(removeCharacter, 10);
          }
        }
      
        removeCharacter();

        
      }
      
     


