// Select the form element
const form = document.getElementById("name-form");

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing on form submission

  // Get the value entered by the user
  const nameInput = document.getElementById("name");
  const userName = nameInput.value.trim(); // Trim to remove unnecessary whitespace

  function alertAndConfirm() {
    // <!-- alert("You are about to navigate to a new website."); -->
    var userConfirmed = confirm(`Name saved successfully: ${userName}
Do you want to proceed?`);
    if (userConfirmed) {
        window.open('html/instruction.html', '_blank');
    }
}

  if (userName) {
    // Save the name to localStorage
    localStorage.setItem("userName", userName);

    alertAndConfirm();
 
    nameInput.value = "";
  } else {
    // Display an error message if the input is empty
    alert("Please enter a valid name!");
  }
});


