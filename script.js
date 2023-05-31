const InputField = document.getElementById('textEnter');

InputField.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  });

function handleSubmit() {
    const userInput = InputField.value;
    // Process the user input
    console.log(userInput);
    // Perform any other actions based on the user input
}