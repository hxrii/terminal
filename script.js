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
    

    
    
    const text = "Commands intro >> Introduction edu     >> Education Details";
    const typingEffect = document.getElementById("typingEffect");
    
    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
          typingEffect.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 10);
        }
      }
      typingEffect.innerHTML='Commands intro >> Introduction edu <br> <br>    >> Education Details'

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
      
     


