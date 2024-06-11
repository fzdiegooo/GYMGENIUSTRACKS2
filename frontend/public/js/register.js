const btnRegister = document.getElementById("btn-register");
const nameRegister = document.getElementById("name-register");
const lastnameRegister = document.getElementById("lastname-register");
const emailRegister = document.getElementById("email-register");
const passwordRegister = document.getElementById("password-register");
const repeatRegister = document.getElementById("repeat-password-register");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  let data;
  if (
    nameRegister.value !== "" &&
    lastnameRegister.value !== "" &&
    emailRegister.value !== "" &&
    passwordRegister.value !== "" &&
    repeatRegister.value !== ""
  ) {
    if (passwordRegister.value === repeatRegister.value) {
      data = {
        name: nameRegister.value,
        lastname: lastnameRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
      };

      fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((registerResponse) => registerResponse.json())
        .then((registerResult) => {
          passwordError.style.display = "none";
          emailError.style.display = "none";
          if (registerResult.error) {
            emailError.style.display = "block";
            emailRegister.focus();
          } else {
            fetch("http://localhost:3000/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: data.email,
                password: data.password,
              }),
            })
              .then((response) => response.json())
              .then((result) => {
                if (result.token) {
                  localStorage.setItem("token", result.token);
                  localStorage.setItem("user", result.email);
                  console.log(result.token);
                  window.location.href = "/home";
                }
              })
              .catch((error) => {
                console.log(error);
              });

            nameRegister.value = "";
            emailRegister.value = "";
            passwordRegister.value = "";
            repeatRegister.value = "";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      passwordError.style.display = "block";
      repeatRegister.focus();
    }
  } else {
    window.alert("Llene todos los campos del formulario");
  }
});
