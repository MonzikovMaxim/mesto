
export const editPopupButton = document.querySelector('.profile__edit-button');
export const deletePopupButton = document.querySelector('.card__trash-button');
export const popupEdit = document.querySelector('.popup_type_profile');
export const avatarOpenButton = document.querySelector('.profile__avatar-edit');
export const avatarSubmitButton = document.querySelector('.popup__avatar-button')
export const nameInput = document.querySelector('.popup__input-name'); 
export const jobInput = document.querySelector('.popup__input-job');
export const addPopupButton = document.querySelector('.profile__add-button');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const avatarPopup = document.querySelector('.popup_type_card-avatar');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

export const cardList = document.querySelector('.cards__list');
export const newTitle = document.querySelector('.popup__input-title');
export const newLink = document.querySelector('.popup__input-link');
export const cardListSection = '.cards__list';
export const popupCloseBtn = '.popup__close-button';
export const editProfilePopup = '.popup_type_profile';
export const editProfileForm = '#popup-edit';
export const avatarPopupSelector = '.popup_type_card-avatar';
export const addPopupSelector = '.popup_type_card-add';
export const deletePopupSelector = ('.popup_type_card-delete');
export const addCardForm = '#popup-add';
export const deleteCardForm = ('#popup-delete');
export const imagePopupSelector = '.popup_type_image';

export const avatarForm = '#popup-avatar';
export const cardTitle = document.querySelector('form__input[name = cardTitle]');
export const cardLink = document.querySelector('form__input[name = cardLink]');
export const avatarLink = document.querySelector('form__input[name = avatarLink]')


 export const userConfig = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
}

export const apiData = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-26',
  token: '9994d482-0445-4f51-baf1-565eed9da0d7'
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
