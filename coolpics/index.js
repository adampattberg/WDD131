
const gallery = document.querySelector('.gallery');
const index = document.querySelector('dialog');
const indexImage = index.querySelector('img');
const closeButton = index.querySelector('.close-viewer');

gallery.addEventListener('click', openIndex);

function openIndex(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');
    
    indexImage.src = full;
    indexImage.alt = alt;

    index.showIndex();
    
}
closeButton.addEventListener('click', () => {
    index.close();
});

index.addEventListener('click', (event) => {
    if (event.target === index) {
        index.close();
    }
});