const btnLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("email-input");
const passwordLogin = document.getElementById("password-input");

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

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
      if(result.token){
        localStorage.setItem('token', result.token)
        console.log(result.token)
        window.location.href = "/api/home"
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
