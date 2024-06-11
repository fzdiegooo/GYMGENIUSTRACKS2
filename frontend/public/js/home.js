const welcomeContainer = document.getElementById("welcome-user");
const btnInicio = document.getElementById("btn-inicio");
const btnPlan12 = document.getElementById("curso-plan12");
const inicioSection = document.getElementById("inicio-container");
const plan12Section = document.getElementById("plan12");
const userInfoForm = document.getElementById("user-info-form")

const data = {
    email: localStorage.getItem("user")
}

fetch("http://localhost:3000/api/homedata", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data)
})
.then((response) => response.json())
.then((result) =>{
    welcomeContainer.innerHTML = `${result.nombre}`;
    if(result.altura === null){
      userInfoForm.style.display = "block"
    }
})


btnInicio.addEventListener("click", () => {
  inicioSection.style.display = "block";
  plan12Section.style.display = "none";
});

btnPlan12.addEventListener("click", () => {
  plan12Section.style.display = "block";
  inicioSection.style.display = "none";
});
