// export { openPopup };
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { 
  initialCards, 
  popupEdit,
  addPopupButton,
  editPopupButton,
  popupAdd,
  nameInput,
  jobInput,
  addCardForm,
  profilePopupSelector,
  imagePopupSelector,
  cardListSection,
  config } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const newCardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '#cards-template');
    const cardElement = card.generateCard();
    newCardList.addItem(cardElement)
  }
}, cardListSection);

const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();


const userInfo = new UserInfo(nameInput, jobInput);
const popupEditProfile = new PopupWithForm(profilePopupSelector, (formData) => {
  userInfo.setUserInfo(formData);
  popupEditProfile.close();
});
popupEditProfile.setEventListeners();



addPopupButton.addEventListener('click', () => {
  addCardForm.reset();
  addProfileValidator.deleteInputError();
});

editPopupButton.addEventListener('click', () => {
  popupEditProfile.open();
  userInfo.getUserInfo();
});


newCardList.renderItems();