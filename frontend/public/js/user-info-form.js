const pesoInput = document.getElementById("peso-input");
const fechaNacInput = document.getElementById("fecha-nacimiento-input");
const alturaInput = document.getElementById("altura-input");
const nivelInput = document.getElementById("nivel-input");
const confirmarButton = document.getElementById("confirm-btn")
const objetivoInput = document.querySelectorAll("input[name = objetivo]")
const form = document.getElementById("user-info-form")
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

    if(pesoInput.value && fechaNacInput.value && alturaInput.value && nivelInput.value && objetivoSelect ){
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
            form.style.display = "none"
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        window.alert("Complete todos los campos")
    }

    
})
