const header = document.querySelector(".header-page")
const logoNav = document.getElementById("logo-nav")
const toggleNavOpen = document.querySelector(".fa-bars")
const toggleNavExit = document.querySelector(".fa-xmark")


window.addEventListener("scroll",()=>{
    if(window.scrollY >0){
        logoNav.setAttribute("src", "img/logo-negro.png")
        header.classList.add("transparent-header")
        toggleNavOpen.style.color = "black"
        toggleNavExit.style.color = "black"
    }else{
        logoNav.setAttribute("src", "img/logo-blanco.png")
        header.classList.remove("transparent-header")
        toggleNavOpen.style.color = "white"
        toggleNavExit.style.color = "white"
    }
    //header.classList.toggle("transparent-header", window.scrollY > 0)
})