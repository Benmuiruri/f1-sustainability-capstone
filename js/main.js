// List of speaker objects

const speaker1 = {
  imageSrc: '../images/ross-brawn.jpg',
  speakerName: 'Ross Brawn',
  title: '',
  speakerDescription: '',
};
const speaker2 = {
  imageSrc: '../images/muhammed.png',
  speakerName: 'Mohammed Ben Sulayem',
  title: '',
  speakerDescription: '',
};
const speaker3 = {
  imageSrc: '../images/wolff.jpg',
  speakerName: 'Toto Wolff',
  title: '',
  speakerDescription: '',
};
const speaker4 = {
  imageSrc: '../images/christian-horner-2021.jpg',
  speakerName: 'Christian Horner',
  title: '',
  speakerDescription: '',
};
const speaker5 = {
  imageSrc: '../images/../images/lewis.jpg',
  speakerName: 'Lewis Hamilton',
  title: '',
  speakerDescription: '',
};
const speaker6 = {
  imageSrc: '../images/sebastian-vettel.jpg',
  speakerName: 'Sebastian Vettel',
  title: '',
  speakerDescription: '',
};

const speakers = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];
// Target open and close triggers in html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const openElems = Array.from(openEls);
const closeElems = Array.from(closeEls);
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

openElems.forEach((el) => {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
});
// Close modal
closeElems.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// add event listener on click outside modal to close modal and enable scroll
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on esc key to close modal and enable scroll
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// Create Speaker Section HTML 

