export const initialCards = [
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
];

export const profileName = document.querySelector('.profile__name'); 
export const profileJob = document.querySelector('.profile__job'); 
export const editPopupButton = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_type_profile'); 
export const nameInput = document.querySelector('.popup__input-name'); 
export const jobInput = document.querySelector('.popup__input-job');
export const addPopupButton = document.querySelector('.profile__add-button');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');
export const addCardForm = document.querySelector('#popup-add');

export const cardList = document.querySelector('.cards__list');
export const newTitle = document.querySelector('.popup__input-title');
export const newLink = document.querySelector('.popup__input-link');

export const popupFullscreen = document.querySelector('.popup_type_image');
export const fullScreenImage = popupFullscreen.querySelector('.fullscreen__image');
export const fullScreenCaption = popupFullscreen.querySelector('.fullscreen__caption');

export const config = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__form_type_error', 
  errorClass: 'popup__input-error_active' 
} 