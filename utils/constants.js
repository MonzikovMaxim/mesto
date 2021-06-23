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

export const editPopupButton = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_type_profile'); 
export const nameInput = document.querySelector('.popup__input-name'); 
export const jobInput = document.querySelector('.popup__input-job');
export const addPopupButton = document.querySelector('.profile__add-button');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

export const cardList = document.querySelector('.cards__list');
export const newTitle = document.querySelector('.popup__input-title');
export const newLink = document.querySelector('.popup__input-link');
export const cardListSection = '.cards__list';
export const popupCloseBtn = '.popup__close-button';
export const editProfilePopup = '.popup_type_profile';
export const editProfileForm = '#popup-edit';
export const addPopupSelector = '.popup_type_card-add';
export const addCardForm = '#popup-add';
export const imagePopupSelector = '.popup_type_image';
export const profileInputName = document.querySelector('.popup__input-name'); 
export const profileInputJob = document.querySelector('.popup__input-job'); 


 export const userConfig = {
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
}



export const fullScreenImage = document.querySelector('.fullscreen__image');
export const fullScreenCaption = document.querySelector('.fullscreen__caption');



export const config = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__form_type_error', 
  errorClass: 'popup__input-error_active' 
} 