const button = document.querySelector("#menu-button");
const nav = document.querySelector("#main-nav");

if (button && nav) {
    button.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    nav.classList.toggle("open");
}

const image = document.querySelector("#car-image");

if (image) {

    let images = [];

    if (window.location.pathname.includes("FZD2")) {

        images = [
            "styles/FZD2-1.jpg",
            "styles/FZD2-2.jpg",
            "styles/FZD2-3.jpg"
        ];

    }
    else if (window.location.pathname.includes("Slash")) {

        images = [
            "styles/Slash-1.webp",
            "styles/Slash-2.jpg",
            "styles/Slash-3.jpg"
        ];

    }

    let currentImage = 0;

    function changeImage() {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        image.src = images[currentImage];

    }

    if (image && images.length > 1) {
        setInterval(changeImage, 5000);
    }

}

const searchButton = document.querySelector("#search-button");

if (searchButton) {
    searchButton.addEventListener("click", searchGoogle);
}

function searchGoogle() {

    const searchTerm = searchButton.dataset.search;

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(searchTerm),
        "_blank"
    );

}