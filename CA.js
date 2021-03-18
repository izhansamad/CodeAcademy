let pass = document.getElementById("pass");
let alertt = document.getElementById("alert");
let cpass = document.getElementById("confirmpass");
function passchk() {
    if (pass.value == '') {
        alertt.innerHTML = "Password cannot be empty";
        document.getElementById("form").reset();
        return false;
    }

    if (pass.value != cpass.value) {
        alertt.innerHTML = "Password don't match!";
        return false;
    }
}
function resethtml() {
    document.getElementById("alert").innerHTML = "";
}

let toggleform = document.getElementById("toggleform");
toggleform.addEventListener("click", function () {
    document.getElementById("form").classList.toggle("toggleform");
    toggleform.classList.toggle("registerquestion")
})
document.getElementById("login").addEventListener("click", function () {
    document.getElementById("form").classList.add("toggleform");
    document.getElementById("submit").value = "Login";
    document.getElementById("registertitle").innerHTML = "LOG IN!";
    toggleform.classList.add("registerquestion");

})
document.getElementById("register").addEventListener("click", function () {
    document.getElementById("form").classList.remove("toggleform");
    document.getElementById("submit").value = "Register";
    document.getElementById("registertitle").innerHTML = "REGISTER YOURSELF!";
    toggleform.classList.remove("registerquestion");
})
document.getElementById("dont").addEventListener("click", function () {
    document.getElementById("registertitle").innerHTML = "REGISTER YOURSELF!";
    document.getElementById("submit").value = "Register";
})
document.getElementById("already").addEventListener("click", function () {
    document.getElementById("registertitle").innerHTML = "LOG IN!";
    document.getElementById("submit").value = "Login";
})
