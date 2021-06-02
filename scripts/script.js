import initialCards from './initial-cards.js'
import { Card, popupCloseButtons } from './Card.js'
import { FormValidator, config } from './FormValidator.js';
 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const editPopupButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_profile'); 
const nameInput = document.querySelector('.popup__input-name'); 
const jobInput = document.querySelector('.popup__input-job');
const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_card-add');
const titleInput = document.querySelector('.popup__input-title'); 
const linkInput = document.querySelector('.popup__input-link');

const cardList = document.querySelector('.cards__list');
const newTitle = document.querySelector('.popup__input-title');
const newLink = document.querySelector('.popup__input-link');

const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();

function createCards(item) {
  const card = new Card(item, '#cards-template');
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
};

initialCards.forEach((element) => {
  createCards(element);
});

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
}

function handleProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleNewImageSubmit(event) {
  event.preventDefault();
  const newObject = {name:newTitle.value, link:newLink.value};
  createCards(newObject);
  closePopup(popupAdd);
}

function closeOpenPopup() {
  const openedPopup = document.querySelector('.popup_open');
  closePopup(openedPopup);
}

 function closePopupOverlay(evt) {
   if (evt.target === evt.currentTarget) {
     closeOpenPopup();
   }
 }

 function closePopupEscape(evt) {
   if (evt.key === 'Escape') {
    closeOpenPopup();
   }
 }

function openPopup(popup) {
  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
  editProfileValidator.deleteInputError();
  popup.classList.add('popup_open');
}

function closePopup(popup) {
  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
  popup.classList.remove('popup_open');
}

popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup))
});


editPopupButton.addEventListener('click', openProfilePopup);
addPopupButton.addEventListener('click', function() {
  titleInput.value = ''; 
  linkInput.value = '';
  addProfileValidator.deleteInputError();
  openPopup(popupAdd);
});
popupEdit.addEventListener('submit', handleProfileSubmit);
popupAdd.addEventListener('submit', handleNewImageSubmit);


export { openPopup }