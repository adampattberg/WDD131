const images = document.querySelectorAll("figure img");
const dialog = document.querySelector("dialog");
const dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector(".close-viewer");

images.forEach((img) => {
    img.addEventListener("click", () => {

        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");

        const full = src.replace("sm", "full");

        dialogImage.src = full;
        dialogImage.alt = alt;

        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    const rect = dialogImage.getBoundingClientRect();

    const clickedInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!clickedInside) {
        dialog.close();
    }
});