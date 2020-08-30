function userCreate(){
    let itemsArray = []

    localStorage.setItem('items', JSON.stringify(itemsArray))
    const input = JSON.parse(localStorage.getItem('user'))
    itemsArray.push(input.value)
    localStorage.setItem('user', JSON.stringify(itemsArray))
    if (Modernizr.localstorage) {

        let txtUsername = document.getElementById('reg_username');  // Get form elements

        txtUsername.value = localStorage.getItem('user'); // Elements populated

        txtUsername.addEventListener('input', function () {     // Save data on keyup
            localStorage.setItem('user', txtUsername.value);
        }, false);

    }
    document.ready(function () {
        $("#createUser").click(function (event) {
            event.preventDefault();
            let user
            window.location = "index.html";
        });
    });
}

function userLogin(key){
    let itemsArray = []

    localStorage.getItem('user', JSON.stringify(itemsArray))
    let input;
    input = JSON.parse(localStorage.setItem('user', document.getElementById("reg_username").innerText));
    itemsArray.push(input.value)
    localStorage.setItem('user', JSON.stringify(itemsArray))
    if (Modernizr.localstorage) {

        let txtUsername = document.getElementById('reg_username');  // Get form elements

        txtUsername.value = localStorage.getItem('user'); // Elements populated

        txtUsername.addEventListener('input', function () {     // Save data on keyup
            localStorage.setItem('user', txtUsername.value);
        }, false);

    }
    document.ready(function () {
        $("#login-button").click(function (event) {
            event.preventDefault();
            window.location = "index.html";
        });
    });
}

