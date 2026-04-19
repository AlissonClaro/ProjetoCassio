function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    // Login fictício
    if (user === "professor" && pass === "1234") {
        window.location.href = "boletim.html";
        return false;
    } else {
        document.getElementById("erro").innerText = "Usuário ou senha inválidos!";
        return false;
    }
}