// List of speaker objects

const speaker1 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646837183/module1-capstone/ross-brawn_qgmohf.jpg',
  speakerName: 'Ross Brawn',
  title: 'Formula One managing director and technical director',
  speakerDescription:
    'He is a former motorsport engineer and Formula One team principal, and has worked for a number of Formula One teams',
};
const speaker2 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646836905/module1-capstone/muhammed_vjgy7k.png',
  speakerName: 'Mohammed Ben Sulayem',
  title: 'President of the FIA ',
  speakerDescription:
    "He is one of the Arab world's leading motor sport figures. He is a patron of a wide range of charities that are researching sustainability inmotor sport",
};
const speaker3 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646836934/module1-capstone/wolff_d8xhsz.jpg',
  speakerName: 'Toto Wolff',
  title: 'Team Principal and CEO: Mercedes-AMG Petronas F1 Team',
  speakerDescription:
    'Toto Wolff, who as CEO has led the Mercedes team to seven drivers and constructors world championship titles in Formula 1',
};
const speaker4 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646836856/module1-capstone/christian_mgsob4.jpg',
  speakerName: 'Christian Horner',
  title: 'Team Principal: Red Bull Formula One team',
  speakerDescription:
    'RED BULL team principal Christian Horner has outlined future plans for F1 to become more sustainable.',
};
const speaker5 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646837245/module1-capstone/lewis_dwouxe.jpg',
  speakerName: 'Sir Lewis Hamilton',
  title: 'Seven-time world F1 champion ',
  speakerDescription:
    'Lewis Hamilton has defended his interest in raising awareness about environmental issues, insisting his Mercedes team is working to become "carbon neutral."',
};
const speaker6 = {
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1646837318/module1-capstone/sebastian-vettel_ch6odf.jpg',
  speakerName: 'Sebastian Vettel',
  title: 'F1 Driver for Aston Martin',
  speakerDescription:
    'He has been shining a spotlight on sustainability and the environment and speaking out on behalf of the L.G.B.T.Q. community.',
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
  speakerFullName.className = 'speaker-full-name';
  speakerProfile.appendChild(speakerFullName);
  const speakerDesc = document.createElement('p');
  speakerDesc.textContent = `${speakers[i].title}`;
  speakerDesc.className = 'speaker-title';
  speakerProfile.appendChild(speakerDesc);
  const greyLine = document.createElement('hr');
  greyLine.className = 'grey-line';
  speakerProfile.appendChild(greyLine);
  const speakerBio = document.createElement('p');
  speakerBio.textContent = `${speakers[i].speakerDescription}`;
  speakerBio.className = 'speaker-bio';
  speakerProfile.appendChild(speakerBio);
  //Apped speaker profile to speaker tile
  speakerTile.appendChild(speakerProfile);
  speakersWrapper.appendChild(speakerTile);
  innerDiv.appendChild(speakersWrapper);
}
speakerSection.appendChild(innerDiv);
