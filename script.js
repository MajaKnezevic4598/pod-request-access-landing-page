const emailInput = document.querySelector(".input");
const btn = document.querySelector(".btn");
const textSpan = document.querySelector(".reg-checkout");

function checkEmail() {
  const reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (!reg.test(emailInput.value)) {
    textSpan.className = "reg-checkout-valid";
    textSpan.textContent = "Oops! Please check your email";
  }
}

btn.addEventListener("click", checkEmail);
