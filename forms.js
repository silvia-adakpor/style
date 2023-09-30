function greet(name)
{console.log("Hi " + name)}
greet ("Silvia");

function double(number){
    console.log(2 * number)
}
double(20);


const form = document.getElementById("mockform");


form.addEventListener("submit", function(event) {
  event.preventDefault();

  let password = document.getElementById("password").value;
 let confirmPassword = document.getElementById("confirmpassword").value;

  if (password !== confirmPassword) {
    // Passwords don't match, show an alert
    alert("password mismatch!");
  } else {
    alert("Access granted");
  }
});