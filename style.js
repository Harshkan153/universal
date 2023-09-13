
let navbar1 = document.querySelector('.header .navbar1')



document.querySelector('#menu-btn').onclick = () =>{
    navbar1.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar1.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active')
    document.querySelector('.account-form .register-form').classList.add('active')
 
};

loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active')
    document.querySelector('.account-form .register-form').classList.remove('active')
 
};

let accountForm = document.querySelector('.account-form ')



document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
};




var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabcursor:true,
  });



//  footer email 
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the email input value
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;
  
    // Validate the email address
    if (validateEmail(email)) {
      // Email is valid, proceed with subscription
      subscribeEmail(email);
      emailInput.value = ""; // Clear the input field
    } else {
      // Email is not valid, display an error message
      alert("Please enter a valid email address.");
    }
  });
  
  function validateEmail(email) {
    // Simple email validation regex pattern
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  function subscribeEmail(email) {
    // Perform the subscription process
    // You can use an AJAX request here to send the email to your server
    // or integrate with a third-party email service provider
    // For simplicity, let's just log the email in the console
    console.log("Subscribed email:", email);
  }
  