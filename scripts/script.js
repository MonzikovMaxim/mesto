const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const editPopupButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup__edit'); 
const nameInput = document.querySelector('.popup__form_type_name'); 
const jobInput = document.querySelector('.popup__form_type_job');
const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add');
const titleInput = document.querySelector('.popup__form_type_title'); 
const linkInput = document.querySelector('.popup__form_type_link');

const cardTemplate = document.querySelector('#cards-template').content;
const cardList = document.querySelector('.card__list');
const popupFullscreen = document.querySelector('.popup__fullscreen');
const closePopup = document.querySelectorAll('.popup__close-button');

const initialCards = [
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
 
initialCards.forEach((element) => {
  addCards(element);
});

function addCards(element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardList.prepend(cardElement);
  cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
  cardElement.querySelector('.card__trash-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', openFullscreenImage);
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
  popupFullscreen.classList.add('popup_open');
}


function openPopup() {
  popupEdit.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openAddPopup() {
  popupAdd.classList.add('popup_open');
  titleInput.value = '';
  linkInput.value = '';
}


function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopups();
}

function formSubmitHandlerNewImage(event) {
  event.preventDefault();
  const newTitle = document.querySelector('.popup__form_type_title');
  const newLink = document.querySelector('.popup__form_type_link');
  const newObject = {name:newTitle.value, link:newLink.value};
  initialCards.unshift(newObject);
  addCards(initialCards[0]);
  closePopups();
}

function closePopups() {
  const findPopup = document.querySelector('.popup_open');
  findPopup.classList.remove('popup_open');
}

editPopupButton.addEventListener('click', openPopup);
addPopupButton.addEventListener('click', openAddPopup);
popupEdit.addEventListener('submit', formSubmitHandler);
popupAdd.addEventListener('submit', formSubmitHandlerNewImage);
closePopup.forEach(popup => popup.addEventListener('click', closePopups));
