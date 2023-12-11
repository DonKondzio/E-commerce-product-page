"use strict";

const navMobileBars = document.querySelector(".nav__mobile-bars");
const navMobileClose = document.querySelector(".nav__mobile-close");
const navMobile = document.querySelector(".nav__mobile");
const navMobilePanel = document.querySelector(".nav__mobile-panel");
const sliderImg = document.getElementsByClassName("slider-img")[0];
const sliderArrowLeft = document.querySelector(".slider-arrow--left");
const sliderArrowRight = document.querySelector(".slider-arrow--right");
const allThumbnails = document.querySelectorAll(".thumbnail");

const shadow = document.querySelector(".shadow");
const largeSlider = document.querySelector(".slider-large-container");
const largeSliderImg = document.querySelector(".slider-large-img");
const largeSliderArrowLeft = document.querySelector(
  ".slider-large-arrow--left"
);
const largeSliderArrowRight = document.querySelector(
  ".slider-large-arrow--right"
);
const largeSliderClose = document.querySelector(".slider-large-close");
const allLargeSliderThumbnails = document.querySelectorAll(
  ".slider-large-thumbnails .thumbnail"
);
const cart = document.querySelector(".cart");
const navCartBtn = document.querySelector(".nav__cart");
const addToCartBtn = document.querySelector(".btn-cart");
const countPlusBtn = document.querySelector(".count-btn--plus");
const countMinusBtn = document.querySelector(".count-btn--minus");
const productsToAddDisplay = document.querySelector(".count");
const cartCountNum = document.querySelector(".count-number");
const productCount = document.querySelector(".product-count");
const productPrice = document.querySelector(".price");
const totalPrice = document.querySelector(".total-price");
const deleteBtn = document.querySelector(".cart-filled-upper-trash");

let currentPhotoNum = 1;
let productsToAdd = 0;
let productsAdded = 0;
let animationInProgress = false;

const handleMobileNav = () => {
  animationInProgress = true;
  navMobileBars.classList.toggle("animate-spin");
  navMobileClose.classList.toggle("animate-spin");
  navMobile.classList.toggle("active");
  navMobilePanel.classList.toggle("animate-slide");
  setTimeout(() => {
    navMobileBars.classList.toggle("active");
    navMobileClose.classList.toggle("active");
    animationInProgress = false;
  }, 300);
};

const swipePhotoLeft = (slider) => {
  currentPhotoNum--;
  if (currentPhotoNum === 0) {
    currentPhotoNum = 4;
  }
  slider.setAttribute(
    "style",
    `background-image: url(dist/img/image-product-${currentPhotoNum}.jpg)`
  );
  slider.classList.add("animate-photo-slide");
  setTimeout(() => {
    slider.classList.remove("animate-photo-slide");
  }, 500);
};

const swipePhotoRight = (slider) => {
  currentPhotoNum++;
  if (currentPhotoNum === 5) {
    currentPhotoNum = 1;
  }
  slider.setAttribute(
    "style",
    `background-image: url(dist/img/image-product-${currentPhotoNum}.jpg)`
  );
  slider.classList.add("animate-photo-slide");
  setTimeout(() => {
    slider.classList.remove("animate-photo-slide");
  }, 500);
};

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
        currentPhotoNum = i + 1;
      }
    }
  });
};

const changePhotoLightbox = (e) => {
  allLargeSliderThumbnails.forEach((thumbnail, i) => {
    for (let i = 0; i < 4; i++) {
      if (allLargeSliderThumbnails[i] === e.target.parentElement) {
        largeSliderImg.setAttribute(
          "style",
          `background-image: url(dist/img/image-product-${i + 1}.jpg)`
        );
      }
    }
  });
};

const changeCountToAdd = (sign) => {
  if (sign === "-" && productsToAdd !== 0) {
    productsToAdd--;
  } else if (sign === "+") {
    productsToAdd++;
  }
  productsToAddDisplay.textContent = productsToAdd;
};

const addToCart = () => {
  productsAdded += productsToAdd;
  productsToAdd = 0;
  productsToAddDisplay.textContent = 0;
  if (productsAdded > 0) {
    cart.classList.add("filled");
    productCount.textContent = productsAdded;
    totalPrice.textContent = `$${
      +productPrice.textContent.substring(1) * productsAdded
    }.00`;
    cartCountNum.classList.add("active");
    cartCountNum.textContent = productsAdded;
  }
};

const deleteProducts = () => {
  productsAdded = 0;
  cart.classList.remove("filled");
};

const switchCartFilled = () => {
  cart.classList.toggle("filled");
  console.log("dupa");
};

const switchCart = () => {
  cart.classList.toggle("active");
  navCartBtn.classList.add("animate-pulse");
  setTimeout(() => {
    navCartBtn.classList.remove("animate-pulse");
  }, 300);
};

const switchLightBoxPhoto = (e) => {
  if (largeSlider.classList.contains("active")) {
    if (e.code === "ArrowLeft") {
      swipePhotoLeft(largeSliderImg);
    } else if (e.code === "ArrowRight") {
      swipePhotoRight(largeSliderImg);
    }
  }
};

const showLightbox = () => {
  largeSlider.classList.add("active");
  largeSliderImg.style.backgroundImage = ` url(dist/img/image-product-${currentPhotoNum}.jpg)`;
};

const hideLightbox = () => {
  largeSlider.classList.remove("active");
};

allThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changePhoto);
});

shadow.addEventListener("click", hideLightbox);
largeSliderClose.addEventListener("click", hideLightbox);
sliderImg.addEventListener("click", () => {
  if (window.innerWidth >= 992) showLightbox();
});
sliderArrowLeft.addEventListener("click", () => {
  swipePhotoLeft(sliderImg);
});
sliderArrowRight.addEventListener("click", () => {
  swipePhotoRight(sliderImg);
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    hideLightbox();
  }
});
document.addEventListener("keydown", switchLightBoxPhoto);
allLargeSliderThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changePhotoLightbox);
});
largeSliderArrowLeft.addEventListener("click", () => {
  swipePhotoLeft(largeSliderImg);
});
largeSliderArrowRight.addEventListener("click", () => {
  swipePhotoRight(largeSliderImg);
});

navMobileBars.addEventListener("click", () => {
  !animationInProgress ? handleMobileNav() : console.log("not so fast");
});

navMobileClose.addEventListener("click", () => {
  !animationInProgress ? handleMobileNav() : console.log("not so fast");
});
navCartBtn.addEventListener("click", switchCart);

countMinusBtn.addEventListener("click", () => {
  changeCountToAdd("-");
});

countPlusBtn.addEventListener("click", () => {
  changeCountToAdd("+");
});

addToCartBtn.addEventListener("click", addToCart);
deleteBtn.addEventListener("click", deleteProducts);
