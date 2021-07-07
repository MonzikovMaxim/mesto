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
  fullScreenImage, 
  fullScreenCaption,
  apiData,
  deletePopupButton,
  deletePopupSelector,
  deleteCardForm,
  config } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js'


// Popup with image
const popupWithImage = new PopupWithImage(imagePopupSelector, fullScreenImage, fullScreenCaption);
popupWithImage.setEventListeners();

const deletePopup = new PopupWithForm(deletePopupSelector, deleteCardForm)
deletePopup.setEventListeners();

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
const popupAddImage = new PopupWithForm(addPopupSelector, addCardForm, (item) => {
  newCardList.addItem(createCard(item))
  popupAddImage.close();
});
popupAddImage.setEventListeners();


addPopupButton.addEventListener('click', () => {
  addProfileValidator.deleteInputError();
  popupAddImage.open();
});

const createCard = (item) => {
  const card = new Card({name: item.cardTitle, link: item.cardLink,
    handleCardClick: () => {
      popupWithImage.open(item.cardTitle, item.cardLink);
  },
  handleDeleteCardClick: () => {
    deletePopup.open();
  }
}, '#cards-template');
  return card.generateCard();
}

// Добавление массива карточек
const newCardList = new Section({ 
  items: initialCards, 
  renderer: (element) => {
    newCardList.addItem(createCard(element));
  }
}, '.cards__list');

newCardList.renderItems();

// валидаторы попапов
const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();

// Api
const {url, token} = apiData
const api = new Api(url, token)

// Promise.all([api.getUserInfo(), api.getInitialCards()])
//   .then()