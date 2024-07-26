function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    var Message = document.getElementById("message");
  
    // Check if username and password are correct
    if (username === "Eduardo224" && password === "Eduardodiaz20@") {
      // Display a temporary message indicating redirection
      Message.innerText = "Loading.....";
  
      // Use setTimeout to delay redirection for 3 seconds
      setTimeout(function() {
        window.location.href = "bal.html";
      }, 2000);
  
      // Prevent form submission (not strictly necessary with setTimeout)
      return false;
    } else {
      // Display error message and reload the page after 2 seconds
      errorMessage.innerText = "Invalid username or password. Please try again.";
      setTimeout(function() {
        window.location.reload();
      }, 2000); // Changed delay to 2 seconds (2000 milliseconds)
      return false; // Prevent form submission (redundant with reload)
    }
  }
  