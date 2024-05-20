const imageForm = document.getElementById("img-form")
const btnCreateAccount = document.getElementById("btn-create-account")
const btnSignIn = document.getElementById("btn-sign-in") 
const inputs = document.querySelectorAll(".input-container input")
const containerRegister = document.getElementById("form-register")
const containerLogin = document.getElementById("form-login")
const btnExitContainer = document.getElementById("btn-exit-container")
const btnExit = document.getElementById("btn-exit")
const popUp = document.getElementById("pop-up-background");
const popUpForm = document.getElementById("pop-up-form");
const btnEntrar = document.getElementById("btn-entrar")
//===========================================//
const toggleBtnEntrar = document.getElementById("btn-entrar-dropdown")

btnCreateAccount.addEventListener('click',()=>{
    containerRegister.classList.remove('animate-left-to-middle');
    containerLogin.classList.remove('animate-middle-to-right');
    containerLogin.classList.add('animate-right-to-middle');
    containerRegister.classList.add('animate-middle-to-left');
    imageForm.style.left = '400px'; 
    btnExit.style.color = "#fff";
    imageForm.style.transition = "all .4s ease-in-out"
    setTimeout(()=>{
        inputs.forEach(input =>{
            input.value=""
        })
    },500)
});

btnSignIn.addEventListener('click',()=>{
    containerLogin.classList.remove('animate-right-to-middle');
    containerRegister.classList.remove('animate-middle-to-left');
    containerRegister.classList.add('animate-left-to-middle');
    containerLogin.classList.add('animate-middle-to-right');
    imageForm.style.left = '0'; 
    btnExit.style.color = "#111";
    imageForm.style.transition = "all .4s ease-in-out"
    setTimeout(()=>{
        inputs.forEach(input =>{
            input.value=""
        })
    },500)
});

btnExitContainer.addEventListener("click", ()=>{
    containerRegister.classList.remove('animate-left-to-middle');
    containerLogin.classList.remove('animate-middle-to-right');
    containerLogin.classList.remove('animate-right-to-middle');
    containerRegister.classList.remove('animate-middle-to-left');
    popUp.style.display = "none";
    popUpForm.style.display = "none"
    document.body.style.overflowY = "scroll"
})

popUp.addEventListener("click",()=>{
    popUp.style.display = "none";
    popUpForm.style.display = "none"
    document.body.style.overflowY = "scroll"
})

btnEntrar.addEventListener("click", ()=>{
    popUp.style.display = "flex"
    popUpForm.style.display = "grid "
    document.body.style.overflowY = "hidden"
})

toggleBtnEntrar.addEventListener("click",()=>{
    popUp.style.display = "flex"
    popUpForm.style.display = "grid "
    document.body.style.overflowY = "hidden"
})

if (window.innerWidth < 1200) {
    btnCreateAccount.addEventListener("click",()=>{
        containerLogin.style.display = "none"
        containerRegister.style.display = "flex"
        btnExit.style.color = "#000";
    })

    btnSignIn.addEventListener("click",()=>{
        containerRegister.style.display = "none"
        containerLogin.style.display = "flex"
    })

}