const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', function () {
  const signInForm = document.querySelector('.sign-in-form');
  const signUpForm = document.querySelector('.sign-up-form');

  signInForm.addEventListener('submit', function (event) {
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      event.preventDefault();
    }
  });

  signUpForm.addEventListener('submit', function (event) {
    const username = signUpForm.querySelector('input[type="text"]').value;
    const contact = signUpForm.querySelector('input[type="varchar"][placeholder="Contact"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (
      username.trim() === '' ||
      contact.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      alert('All fields are required.');
      event.preventDefault();
    }
  });
});

// The rest of your code
$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});
