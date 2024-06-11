const btnLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");
const loginError = document.getElementById("login-error")

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    email: emailLogin.value,
    password: passwordLogin.value,
  };

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if(!result.token){
        loginError.style.display = "block";
        loginError.style.margin = "1px auto"
      }else{
        localStorage.setItem('token', result.token)
        localStorage.setItem('user', result.email)
        console.log(result.token)
        window.location.href = "/home"

      }
    })
    .catch((error) => {
      console.log(error);
    });
});

