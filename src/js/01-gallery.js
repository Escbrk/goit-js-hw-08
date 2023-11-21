// Add imports above this line
import { galleryItems } from './gallery-items'; 
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const imageEL = galleryItems
  .map(
    ({ description, original, preview }) => `
  <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
            />
    </a>
    </li>
`
  )
  .join('');

gallery.innerHTML = imageEL;

gallery.addEventListener('click', onClick);
let instance = null;

const escClose = event => {
  console.log(event.code);

  if (event.code === 'Escape') {
    instance.close();
  }
};

function onClick(event) {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') {
    return;
  }

  const res = event.target.dataset.source;

  instance = basicLightbox.create(
    `<img src=${res}>`,
    { onShow: () => document.addEventListener('keydown', escClose) },
    { onClose: () => document.removeEventListener('keydown', escClose) }
  );
  instance.show();
}

