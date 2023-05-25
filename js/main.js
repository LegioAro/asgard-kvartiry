//sliders

const swiper = new Swiper('.slider-1', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.about__slider-1 .about__slider-arrow--r',
    prevEl: '.about__slider-1 .about__slider-arrow--l',
  },

  pagination: {
    el: '.about__slider-1 .about__slider-pagination',
    bulletActiveClass: 'about__slider-pagination-elem--active',
    bulletClass: 'about__slider-pagination-elem',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },

    1150: {
      slidesPerView: 1,
    },
  },
});

const swiper2 = new Swiper('.slider-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.about__slider-2 .about__slider-arrow--r',
    prevEl: '.about__slider-2 .about__slider-arrow--l',
  },

  pagination: {
    el: '.about__slider-2 .about__slider-pagination',
    bulletActiveClass: 'about__slider-pagination-elem--active',
    bulletClass: 'about__slider-pagination-elem',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },

    1540: {
      slidesPerView: 1,
    },
  },
});

const swiper3 = new Swiper('.slider-3', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.about__slider-3 .about__slider-arrow--r',
    prevEl: '.about__slider-3 .about__slider-arrow--l',
  },

  pagination: {
    el: '.about__slider-3 .about__slider-pagination',
    bulletActiveClass: 'about__slider-pagination-elem--active',
    bulletClass: 'about__slider-pagination-elem',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },

    1400: {
      slidesPerView: 1,
    },
  },
});

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//Form
const form = document.querySelector('#form');
const agreeCheckbox = form.querySelector('#agree');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let formInputs = form.querySelectorAll('input');
  let result = true;

  formInputs.forEach((input) => {
    if (input.classList.contains('novalid')) {
      result = false;
    }
  });

  if (agreeCheckbox && !agreeCheckbox.checked) {
    result = false;
  }

  if (result) {
    form.submit();
  }
});

//review

const reviewBtns = document.querySelectorAll('*[data-review-btn]');
const review = document.querySelector('*[data-review-img]');
const reviewImg = review.querySelector('.review__img');
const reviewZoomBtns = review.querySelectorAll('.review__btn');

if (reviewBtns.length > 0 && reviewImg) {
  reviewBtns.forEach((reviewBtn) => {
    reviewBtn.addEventListener('click', () => {
      review.classList.remove('review--scale');
      const sourceBigImg = reviewBtn.getAttribute('data-review-big');
      reviewImg.setAttribute('src', sourceBigImg);
    });
  });
}

if (reviewZoomBtns.length > 0) {
  reviewZoomBtns.forEach((zoomBtn) => {
    zoomBtn.addEventListener('click', () => {
      if (zoomBtn.hasAttribute('data-review-zoom')) {
        let zoomBtnAttr = zoomBtn.getAttribute('data-review-zoom');

        if (zoomBtnAttr === 'plus') {
          review.classList.add('review--scale');
        } else if (zoomBtnAttr === 'minus') {
          review.classList.remove('review--scale');
        }
      }
    });
  });
}

if (window.innerHeight > 1024) {
}

review.onmousedown = () => {
  let pageX = 0;
  let pageY = 0;

  document.onmousemove = (e) => {
    if (pageX !== 0) {
      review.scrollLeft = review.scrollLeft + (pageX - e.pageX);
    }
    if (pageY !== 0) {
      review.scrollTop = review.scrollTop + (pageY - e.pageY);
    }
    pageX = e.pageX;
    pageY = e.pageY;
  };

  review.onmouseup = () => {
    document.onmousemove = null;
    review.onmouseup = null;
  };

  review.ondragstart = () => {
    return false;
  };
};
