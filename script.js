const InputField = document.getElementById('textEnter');

InputField.addEventListener('input', function(event) {
    if (event.target.value == 'help') {
      handleSubmit();
    }
  });

function handleSubmit() {
    
    const userInput = InputField.value;
    
    const text = "This is a typing animation effect.";
    const typingEffect = document.getElementById("typingEffect");

    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
          typingEffect.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 100);
        }
      }

   typeText();
    

}

