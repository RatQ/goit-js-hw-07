const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailForm = formLogin.elements.email.value.trim();
    const passwordForm = formLogin.elements.password.value.trim();
    if (emailForm === "" || passwordForm === "") {
        alert('All form fields must be filled in');
        return;
    }
    const loginForm = {
        email: emailForm,
        password: passwordForm
    }
console.log(loginForm);
  formLogin.reset();   
});