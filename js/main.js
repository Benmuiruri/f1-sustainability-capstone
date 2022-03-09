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

const speakerSection = document.querySelector('#speakers');
// Create inner Div
const innerDiv = document.createElement('div');
innerDiv.className = 'inner-content';
const speakerHeader = document.createElement('div');
speakerHeader.className = 'about-section-header';
const speakerTitle = document.createElement('h2');
speakerTitle.textContent = 'Featured Speakers';
const orangeLine = document.createElement('hr');
orangeLine.className = 'orange-line';
speakerHeader.appendChild(speakerTitle);
speakerHeader.appendChild(orangeLine);
innerDiv.appendChild(speakerHeader);
//Create Speakers list wrapper
const speakersWrapper = document.createElement('div');
speakersWrapper.className = 'speakers-wrapper';

// Create speaker divs for available speakers
for (let i = 0; i < speakers.length; i++) {
  //Create speaker tile
  const speakerTile = document.createElement('div');
  speakerTile.className = 'speaker-tile';
  //Create speaker image
  const speakerImgDiv = document.createElement('div');
  speakerImgDiv.className = 'speaker-img';
  const speakerImg = document.createElement('img');
  speakerImg.src = `${speakers[i].imageSrc}`;
  speakerImgDiv.appendChild(speakerImg);
  speakerTile.appendChild(speakerImgDiv);
  //Create speaker profile
  const speakerProfile = document.createElement('div');
  speakerProfile.className = 'speaker-profile';
  //Add speaker profile elements
  const speakerFullName = document.createElement('h3');
  speakerFullName.textContent = `${speakers[i].speakerName}`;
  speakerProfile.appendChild(speakerFullName);
  const speakerDesc = document.createElement('p');
  speakerDesc.textContent = `${speakers[i].title}`;
  speakerProfile.appendChild(speakerDesc);
  const greyLine = document.createElement('hr');
  greyLine.className = 'grey-line';
  speakerProfile.appendChild(greyLine);
  const speakerBio = document.createElement('p');
  speakerBio.textContent = `${speakers[i].speakerDescription}`;
  speakerProfile.appendChild(speakerBio);
  //Apped speaker profile to speaker tile
  speakerTile.appendChild(speakerProfile);
  innerDiv.appendChild(speakerTile);
}
speakerSection.appendChild(innerDiv);
