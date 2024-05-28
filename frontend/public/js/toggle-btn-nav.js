const toggleButton = document.getElementById("toggle-btn");
const dropdownNav = document.getElementById("dropdown-nav");
const toggleButtonClose = document.getElementById("toggle-btn-close")

toggleButton.addEventListener("click",()=>{
    dropdownNav.style.display = "flex"
    toggleButton.style.display ="none"
    toggleButtonClose.style.display = "block"
})

toggleButtonClose.addEventListener("click",()=>{
    dropdownNav.style.display = "none"
    toggleButtonClose.style.display = "none"
    toggleButton.style.display ="block"
})