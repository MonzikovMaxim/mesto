import '../pages/index.css';
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { 
  initialCards,
  profileInputName,
  profileInputJob, 
  popupEdit,
  addPopupButton,
  editPopupButton,
  popupAdd,
  userConfig,
  addPopupSelector,
  addCardForm,
  editProfilePopup,
  editProfileForm,
  imagePopupSelector,
  config } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';


// Popup with image
const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// User information
const {nameSelector, jobSelector} = userConfig;
const userInfo = new UserInfo(nameSelector, jobSelector);

//Edit Popup
const popupEditProfile = new PopupWithForm(editProfilePopup, editProfileForm, (formValues) => {
  userInfo.setUserInfo(formValues);
  popupEditProfile.close();
});
popupEditProfile.setEventListeners();

editPopupButton.addEventListener('click', () => {
  const {name, job} = userInfo.getUserInfo()
  profileInputName.value = name;
  profileInputJob.value = job;
  editProfileValidator.deleteInputError();
  popupEditProfile.open();
});


// Add Image Popup
const popupAddImage = new PopupWithForm(addPopupSelector, addCardForm, (data) => {
  const {cardTitle, cardLink} = data;
  const card = new Card({name: cardTitle, link: cardLink,
    handleCardClick: () => {
      popupWithImage.open(cardTitle, cardLink);
  }}, '#cards-template');
  const cardElement = card.generateCard();
  newCardList.addItem(cardElement)
  popupAddImage.close();
});
popupAddImage.setEventListeners();



addPopupButton.addEventListener('click', () => {
  addProfileValidator.deleteInputError();
  popupAddImage.open();
});

// Добавление массива карточек
const newCardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card({name: item.name, link: item.link, handleCardClick: () => {
      popupWithImage.open(item.name, item.link);
    }}, '#cards-template');
    const cardElement = card.generateCard();
    newCardList.addItem(cardElement)
  }
}, '.cards__list');

newCardList.renderItems();

// валидаторы попапов
const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();