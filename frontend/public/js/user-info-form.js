const pesoInput = document.getElementById("peso-input");
const fechaNacInput = document.getElementById("fecha-nacimiento-input");
const alturaInput = document.getElementById("altura-input");
const nivelInput = document.getElementById("nivel-input");
const confirmarButton = document.getElementById("confirm-btn")
const objetivoInput = document.querySelectorAll("input[name = objetivo]")
let userData
let objetivoSelect


confirmarButton.addEventListener("click", ()=>{
    objetivoInput.forEach((objetivo)=>{
        if(objetivo.checked){
            objetivoSelect = objetivo.value
        }
    })
    userData ={
        peso: parseInt(pesoInput.value),
        fecha_nac: fechaNacInput.value,
        altura: parseInt(alturaInput.value),
        nivel: parseInt(nivelInput.value),
        objetivo: parseInt(objetivoSelect),
        email: localStorage.getItem("user")
    }
    console.log(userData)

    fetch("http://localhost:3000/api/userInfo", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((result) =>{
        console.log(result.message);
        location.reload()
    })
    .catch((error)=>{
        console.log(error);
    })
})
