const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm_password");
const submitBtn = document.querySelector("button");
const hiddenText = document.querySelector(".hidden");

submitBtn.addEventListener("click", () => {
    if (password.value !== passwordConfirm.value) {
        password.setCustomValidity(" ");;
        passwordConfirm.setCustomValidity(" ");
        hiddenText.style.visibility = "visible";
    } else {
        password.setCustomValidity("");;
        passwordConfirm.setCustomValidity("");
        hiddenText.style.visibility = "hidden";
    }
})