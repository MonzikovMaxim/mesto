export { openPopup };
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { 
  initialCards,
  profileName, 
  profileJob, 
  editPopupButton, 
  popupEdit,
  nameInput,
  jobInput,
  addPopupButton,
  popupAdd,
  popupCloseButtons,
  addCardForm,
  newTitle,
  newLink,
  config } from '../components/constants.js';
import Section from '../components/Section.js';

const newCardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '#cards-template');
    const cardElement = card.generateCard();
    newCardList.addItem(cardElement)
  }
}, '.cards__list');

const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();

function createCards() {
initialCards.forEach((element) => {
  createCards(element);
});
}

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
addPopupButton.addEventListener('click', () => {
  addCardForm.reset();
  addProfileValidator.deleteInputError();
  openPopup(popupAdd);
});
popupEdit.addEventListener('submit', handleProfileSubmit);
popupAdd.addEventListener('submit', handleNewImageSubmit);
newCardList.renderItems();