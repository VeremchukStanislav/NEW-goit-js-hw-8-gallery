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


// Открытие модалки по клику


ref.jsGallery.addEventListener('click', openJsLightbox); // Открытие модалки по клику

function openJsLightbox(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const largeImg = e.target.dataset.source;
    const imgAlt = e.target.alt;
    const index = e.target.dataset.index;

    ref.jsLightbox.classList.add("is-open");
    ref.lightboxImage.src = largeImg;
    ref.lightboxImage.alt = imgAlt;
    ref.lightboxImage.dataset.index = index;
}


// Закрытие модалки по иконке
// Закрытие модалки по пустоте
// Закрытие модалки по ESC


ref.lightboxButton.addEventListener('click', closeJsLightbox); // Закрытие модалки по иконке
ref.lightboxOverlay.addEventListener('click', closeJsLightbox); // Закрытие модалки по пустоте

function closeJsLightbox() {
    ref.jsLightbox.classList.remove("is-open");
    ref.lightboxImage.src = '';
    ref.lightboxImage.alt = '';
}

document.addEventListener('keydown', closeJsLightboxByEsc); // Закрытие модалки по ESC

function closeJsLightboxByEsc(e) {
    if (e.code === "Escape") {
        closeJsLightbox();
    }
}
