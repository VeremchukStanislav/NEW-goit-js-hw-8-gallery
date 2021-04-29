import galleryItems from "./gallery-items.js"

// Создание разметки по массиву

const ref = {
    jsGallery: document.querySelector('.js-gallery'),
    jsLightbox: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxButton: document.querySelector('[data-action="close-lightbox"]'),
    galleryItem: document.querySelector('.gallery-item'),
    galleryLink: document.querySelector('.gallery-link'),
}

const gallery = createGallery(galleryItems);
ref.jsGallery.insertAdjacentHTML('beforeend', gallery);

function createGallery(gallery) {
    return gallery.map(({ preview, original, description }, index) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" data-index="${index}" alt="${description}">
    </a>
    </li>
    `;
    }).join('');
}

