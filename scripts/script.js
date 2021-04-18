let formElement = document.querySelector('.popup__data');
let profileName = document.querySelector('.profile__name'); 
let profileJob = document.querySelector('.profile__job'); 
let openPopupButton = document.querySelector('.profile__edit-button'); 
let popup = document.querySelector('.popup'); 
let nameInput = document.querySelector('.popup__form_type_name'); 
let jobInput = document.querySelector('.popup__form_type_job'); 
let closePopupButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_open');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


