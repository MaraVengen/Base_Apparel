const submitBtn = document.querySelector(".formm").querySelector("button");
const input = document.querySelector("#input-email");
const form = document.querySelector(".formm");

function validateEmail(email) {
  const atSign = email.indexOf("@");
  const dotSign = email.indexOf(".");
  if (atSign < 1 || dotSign < atSign + 2 || dotSign + 2 >= email.length) {
    document.querySelector(
      ".validity-message"
    ).innerText = `Invalid email, please try again!`;
    document.querySelector(".validity-message").classList.remove("success");
    document.querySelector(".validity-message").classList.add("error");
  } else {
    document.querySelector(
      ".validity-message"
    ).innerText = `Form Submission Successful!`;
    document.querySelector(".validity-message").classList.remove("error");
    document.querySelector(".validity-message").classList.add("success");
  }

  setTimeout(() => {
    document.querySelector(".validity-message").innerText = "";
  }, 2000);

  input.value = "";
}

submitBtn.addEventListener("click", () => validateEmail(input.value));
