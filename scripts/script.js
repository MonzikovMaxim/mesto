const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const editPopupButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_profile'); 
const nameInput = document.querySelector('.popup__form_type_name'); 
const jobInput = document.querySelector('.popup__form_type_job');
const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_card-add');
const titleInput = document.querySelector('.popup__form_type_title'); 
const linkInput = document.querySelector('.popup__form_type_link');

const cardTemplate = document.querySelector('#cards-template').content;
const cardList = document.querySelector('.cards__list');
const popupFullscreen = document.querySelector('.popup_type_image');
const popupCloseButtons = document.querySelectorAll('.popup__close-button'); 
 
initialCards.forEach((element) => {
  cardList.prepend(createCards(element));
});

function createCards(element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
  cardElement.querySelector('.card__trash-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', openFullscreenImage);

  return cardElement;
  };


function likeCard(event) {
  event.target.classList.toggle('card__like-button_active');
};

function deleteCard(event) {
  event.target.closest('.card').remove();
};

function openFullscreenImage(event) {
  const fullScreenImage = popupFullscreen.querySelector('.fullscreen__image');
  fullScreenImage.src = event.target.src;
  fullScreenImage.alt = event.target.alt;
  const fullScreenCaption = popupFullscreen.querySelector('.fullscreen__caption');
  fullScreenCaption.textContent = event.target.alt;
  openPopup(popupFullscreen);
}


function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
}

function openAddPopup() {
  titleInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
}


function handleProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleNewImageSubmit(event) {
  event.preventDefault();
  const newTitle = document.querySelector('.popup__form_type_title');
  const newLink = document.querySelector('.popup__form_type_link');
  const newObject = {name:newTitle.value, link:newLink.value};
  cardList.prepend(createCards(newObject));
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
addPopupButton.addEventListener('click', openAddPopup);
popupEdit.addEventListener('submit', handleProfileSubmit);
popupAdd.addEventListener('submit', handleNewImageSubmit);

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(config);