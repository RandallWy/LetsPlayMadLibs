//TODO--fix the redirection
function changePage(){
    document.getElementById("sign_in").onclick = function (){
        window.location.href= "start.html";
    }
}

function logInAndRedirect(){
    document.getElementById("sign_in").addEventListener("click",changePage)
}