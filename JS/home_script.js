const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
 event.preventDefault();

  const nameInput = document.getElementById("name");
  const userName = nameInput.value.trim();

  function alertAndConfirm() {
    var userConfirmed = confirm(`Name saved successfully: ${userName}
Do you want to proceed?`);
    if (userConfirmed) {
      window.open("/html/instruction.html", "_blank");
    }
  }

  if (userName) {
    localStorage.setItem("userName", userName);

    alertAndConfirm();

    nameInput.value = "";
  } else {
    alert("Please enter a valid name!");
  }
});
