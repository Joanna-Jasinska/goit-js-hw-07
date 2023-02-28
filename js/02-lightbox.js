import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

for (const gi of galleryItems) {
  galleryDiv.append(document.createElement("div"));
  const div =
    document.querySelectorAll(".gallery div")[
      document.querySelectorAll(".gallery div").length - 1
    ];
  div.append(document.createElement("a"));
  const link = div.querySelector("a");
  link.append(document.createElement("img"));
  link.classList.add("gallery__item");
  link.href = gi.original;
  const img = div.querySelector("img");
  img.classList.add("gallery__image");
  img.src = gi.preview;
  img.alt = gi.description;
  img.dataset.source = gi.original;

  link.onclick = (e) => {
    e.preventDefault();
  };
}
let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // nothing xD
});
