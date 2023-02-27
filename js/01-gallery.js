import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

for (const gi of galleryItems) {
  gallery.append(document.createElement("div"));
  const div =
    document.querySelectorAll(".gallery div")[
      document.querySelectorAll(".gallery div").length - 1
    ];
  div.classList.add("gallery__item");
  div.append(document.createElement("a"));
  const link = div.querySelector("a");
  link.append(document.createElement("img"));
  link.classList.add("gallery__link");
  link.href = gi.original;
  const img = div.querySelector("img");
  img.classList.add("gallery__image");
  img.src = gi.preview;
  img.alt = gi.description;
  img.dataset.source = gi.original;
  link.onclick = (e) => {
    e.preventDefault();
    const lightbox = basicLightbox.create(
      `
		<img width="1400" height="900" src="${img.dataset.source}">
	`
    );

    lightbox.show();
    document.addEventListener("keydown", closeGallery);
    function closeGallery(e) {
      //console.log(e);
      if (e.key == "Escape") {
        lightbox.close();
        document.removeEventListener("keydown", closeGallery);
      }
    }
  };
}
