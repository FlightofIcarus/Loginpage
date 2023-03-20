let password = document.getElementById("senha");

function viewPassword() {
    let showUp = document.createElement("span");
    showUp.id = "show";
    let showArea = document.getElementById("senha-area");
    password.removeAttribute("placeholder")
    showArea.appendChild(showUp);
    showUp.innerHTML = password.value;
    password.value = ""
        
}

function hidePassword() {
    let senha = document.getElementById("show");
    password.value = senha.innerHTML;
    let showof = document.getElementById("show");
    showof.remove();
    password.setAttribute("placeholder", "Digite sua senha");
}