let profile = document.querySelector('.profile__box');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');
let openPopupButton = profile.querySelector('.button__edit');
let popup = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let closePopupButton = popup.querySelector('.button__close');
let savePopupButton = popup.querySelector('.button__save');

openPopupButton.addEventListener('click', function openPopup() {
  popup.classList.add('popup_open');
});

closePopupButton.addEventListener('click', function closePopup() {
  popup.classList.remove('popup_open');
});

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

savePopupButton.addEventListener('click', function saveButton(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_open');
});
