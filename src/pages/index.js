import '../pages/index.css';
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import {
  nameInput,
  jobInput, 
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
  avatarPopup,
  avatarForm,
  avatarOpenButton,
  deletePopupSelector,
  avatarPopupSelector,
  apiData,
  config } from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js'
import Api from '../components/Api.js'


const {url, token} = apiData;
const api = new Api(url, token)

// валидаторы попапов
const addProfileValidator = new FormValidator(config, popupAdd);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(config, popupEdit);
editProfileValidator.enableValidation();

const changeAvatarValidator = new FormValidator(config, avatarPopup);
changeAvatarValidator.enableValidation();

// Popup with image
const popupWithImage = new PopupWithImage(imagePopupSelector, fullScreenImage, fullScreenCaption);
popupWithImage.setEventListeners();

//Popup with submit
const deleteCardPopup = new PopupWithSubmit(deletePopupSelector);
deleteCardPopup.setEventListeners();

// User information
const {nameSelector, aboutSelector, avatarSelector} = userConfig;
const userInfo = new UserInfo(nameSelector, aboutSelector, avatarSelector);

let userId = null;
let newCardList;

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([user, cards]) => {
  userId = user._id
  newCardList = new Section({
    items: cards, 
    renderer: (element) => {
      newCardList.addItem(createCard(element), false);
    }
  }, '.cards__list');
  newCardList.renderItems(cards);
  userInfo.setInfo(user);
})
.catch(err => console.log(err));

//Edit Popup
const popupEditProfile = new PopupWithForm({
  popupSelector: editProfilePopup, 
  formSelector: editProfileForm,
  handleFormSubmit: (formValues) => {
  popupEditProfile.renderLoading(true);
  api.setUserInfo(formValues)
  .then((res) => {
    userInfo.setInfo(res)
    popupEditProfile.close();
  })
  .catch((err) => {
    console.log(`Ошибка при загрузке новой информации о себе: ${err}`)
    })
  .finally(() => {
    popupEditProfile.renderLoading(false);
  })  
  }
})
popupEditProfile.setEventListeners();


const popupAvatar = new PopupWithForm({
  popupSelector: avatarPopupSelector, 
  formSelector: avatarForm, 
  handleFormSubmit: (data) => {
  popupAvatar.renderLoading(true);
  api.changeAvatar(data.avatarLink)
  .then((item) => {
    userInfo.setAvatar(item);
    popupAvatar.close()
  })
  .catch((err) => {
    console.log(`Ошибка при загрузке аватара: ${err}`)
    })
  .finally(() => {
    popupAvatar.renderLoading(false);
  })  
  }
})
popupAvatar.setEventListeners();

const popupAddImage = new PopupWithForm({
  popupSelector: addPopupSelector,
  formSelector: addCardForm,
  handleFormSubmit: (data) => {
    popupAddImage.renderLoading(true)
    api.addNewCard(data.cardTitle, data.cardLink)
    .then(item => {
      newCardList.addItem(createCard(item), false)
      popupAddImage.close()
      popupAddImage.renderLoading(false)
    })
    .catch((err) => {
      console.log(`Ошибка при загрузке новой карточки: ${err}`)
      })
    .finally(() => {
      popupAddImage.renderLoading(false);
    })  
  }
})
  popupAddImage.setEventListeners();

function createCard(dataCard) {
  const card = new Card({
  data: dataCard,
  ownerId: userId,
  handleCardClick: (name, link) =>  popupWithImage.open(name, link),
  handleDeleteCardClick: () => {
    deleteCardPopup.open()
    deleteCardPopup.setFormSubmit(() => {
    api.deleteCard(dataCard._id)
    .then(() => {
      card.handleRemoveCard()
      deleteCardPopup.close()
    })
  })
},
  handleClickLike: (cardId) => { 
    api.setLike(cardId)
    .then((data) => {
      return data.likes.length;
    })
    .then((data) => {
      card.showLikes(data)
    })
    .catch((err) => {
      console.log(`Ошибка лайков ${err}`)
    })
  },
  handleDeleteLike: (cardId) => {
    api.deleteLike(cardId)
    .then((data) => {
      return data.likes.length
    })
    .then((data) => {
      card.showLikes(data)
    })
    .catch((err) => {
      console.log(`Ошибка лайков ${err}`)
    }) 
  },
  cardSelector: '#cards-template'});
  return card.generateCard();
}

//кнопки открытия попапов

addPopupButton.addEventListener('click', () => {
  addProfileValidator.deleteInputError();
  popupAddImage.open();
});

avatarOpenButton.addEventListener('click', () => {
  changeAvatarValidator.deleteInputError();
  popupAvatar.open();
});

editPopupButton.addEventListener('click', () => {
  const {name, about} = userInfo.getInfo()
  nameInput.value = name;
  jobInput.value = about; 
  editProfileValidator.deleteInputError();
  popupEditProfile.open();
});
