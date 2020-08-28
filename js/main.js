//TODO--fix the redirection
function changePage(){
    document.getElementById("sign_in").onclick = function (){
        window.location.href= "start.html";
    }
}

function logInAndRedirect(){
    document.getElementById("sign_in").addEventListener("click",changePage)
}

function showToolTip(){
    document.getElementById("defaultRegisterFormPassword").tooltip('show')
}


function login(){
    let form = document.getElementById('login');

    addEvent(form, 'submit', function (e) {
        e.preventDefault();
        let elements = this.elements;
        let username = elements.username.value;
        let msg = 'Welcome ' + username;
        document.getElementById('main').textContent = msg;
    });
}

let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
itemsArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemsArray))
// This example has been updated to use Modernizr - please note the use of of lowercase in localstorage
if (Modernizr.localstorage) {

    let txtUsername = document.getElementById('username'),  // Get form elements
        txtAnswer = document.getElementById('answer');

    txtUsername.value = localStorage.getItem('username'); // Elements populated
    txtAnswer.value = localStorage.getItem('answer');     // by localStorage

    txtUsername.addEventListener('input', function () {     // Save data on keyup
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function () {       // Save data on keyup
        localStorage.setItem('answer', txtAnswer.value);
    }, false);
}