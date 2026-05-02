
let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src = "images/byui-logo-white.png";
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";

    } else {
        // default
        logo.src = "images/byui-logo-blue.webp";
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    }
}