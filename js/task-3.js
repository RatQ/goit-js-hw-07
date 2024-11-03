const inputForm = document.querySelector("#name-input");
const outputForm = document.querySelector("#name-output");

inputForm.addEventListener("input", () => {
    const textValueTrim = inputForm.value.trim();
    outputForm.textContent = textValueTrim ? textValueTrim : "Anonymous";
});