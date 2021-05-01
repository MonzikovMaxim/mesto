const formElement = document.querySelector('.popup__data');
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const editPopupButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = document.querySelector('.popup__close-button-edit');
const popupEdit = document.querySelector('.popup__edit'); 
const nameInput = document.querySelector('.popup__form_type_name'); 
const jobInput = document.querySelector('.popup__form_type_job');


const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add');
const closeAddPopupButton = document.querySelector('.popup__close-button-add');
const titleInput = document.querySelector('.popup__form_type_title'); 
const linkInput = document.querySelector('.popup__form_type_link');
const cardContainer = document.querySelector('.card__list');
const likeButton = document.querySelector('.card__like-button');
const likeTrash = document.querySelector('.card__trash-button');
const cardImage = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__title');
 
const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/Dombay.jpg'
  },
  {
    name: 'Куршская коса',
    link: './images/kurshskya-kosa.jpg'
  },
  {
    name: 'Байкал',
    link: './images/Baikal.jpg'
  },
  {
    name: 'Алтай',
    link: './images/Altai.jpg'
  }
];

const addCard = function(element) {
  const cardTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;

  cardContainer.append(cardElement);
} 

initialCards.forEach(addCard);


function openPopup() {
  popupEdit.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openAddPopup() {
  popupAdd.classList.add('popup_open');
}

function closeEditPopup() {
  popupEdit.classList.remove('popup_open');
}

function closeAddPopup() {
  popupAdd.classList.remove('popup_open');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}



editPopupButton.addEventListener('click', openPopup);
addPopupButton.addEventListener('click', openAddPopup);
closeEditPopupButton.addEventListener('click', closeEditPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
formElement.addEventListener('submit', formSubmitHandler);
