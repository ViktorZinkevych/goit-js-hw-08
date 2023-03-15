// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const galleryMarkup = handleGalleryMarkup(galleryItems);
 
function handleGalleryMarkup(items) {
    return items.map(item => `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-lightbox = "nature"/>
  </a>`).join('');
}
galleryList.insertAdjacentHTML('beforeend',galleryMarkup);


galleryList.addEventListener('click',handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault()
    
    if(event.target.nodeName !== 'IMG'){
        return
    }
    const modalImg = event.target.dataset.lightbox;
    console.log(modalImg);

    // var lightbox = new SimpleLightbox('.gallery a', {caption: true, captionSelector: 'img', captionDelay:250,
    // captionsData: 'alt' });

}

import SimpleLightbox from "simplelightbox";
let gallery = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'all',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
});
gallery.on('show.simplelightbox', function () {});
gallery.on('error.simplelightbox', function (event) {
	console.log(event);
});

