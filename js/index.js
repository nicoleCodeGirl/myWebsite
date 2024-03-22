
//tiktok link 
document.getElementById('tiktok-link').addEventListener('click', function() {
  window.open("https://www.tiktok.com/@nicolecodegirl?_t=8kQdYCG5AZq&_r=1");
});



//DONATE

const donateImg = document.getElementById("donate-img");
const donateBtn = document.getElementById("donate-btn");

donateImg.addEventListener("click", () => {
  window.location.href = "https://www.paypal.me/nicoleluvzpurple";
});

donateBtn.addEventListener("click", () => {
  window.location.href = "https://www.paypal.me/nicoleluvzpurple";
});

//CONTACT FORM

function validateForm() {
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (email == "" || subject == "" || message == "") {
      document.getElementById('email-error').textContent = email == "" ? "Email is required" : "";
      document.getElementById('subject-error').textContent = subject == "" ? "Subject is required" : "";
      document.getElementById('message-error').textContent = message == "" ? "Message is required" : "";
      return false;
  }
  return true;
}




