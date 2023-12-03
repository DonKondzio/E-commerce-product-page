const allThumbnails = document.querySelectorAll(".thumbnail");
const sliderImg = document.getElementsByClassName("slider-img")[0];
const thumbnail1 = document.querySelector(".thumbnails:nth-child(1)");

const displaySelectedThumbnail = () => {
  console.log(document.querySelector(".thumbnail:focus"));
};

const setDisplayedImg = (chosenThumbnail) => {
  chosenThumbnail.url;
};

const changePhoto = (e) => {
  allThumbnails.forEach((thumbnail, i) => {
    for (let i = 0; i < 4; i++) {
      if (allThumbnails[i] === e.target.parentElement) {
        sliderImg.setAttribute(
          "style",
          `background-image: url(dist/img/image-product-${i + 1}.jpg)`
        );
      }
    }
  });
};

allThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changePhoto);
});

// setInterval(displaySelectedThumbnail, 1000);

// musi po kliknięciu każdego thumbnaila pobierać element ze stanem focus
// i na podstawie jego indeksu w tablicy wyświetlać dane zdjęcie
