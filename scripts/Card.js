import { openPopup } from './script.js';

const popupFullscreen = document.querySelector('.popup_type_image');
const fullScreenImage = popupFullscreen.querySelector('.fullscreen__image');
const fullScreenCaption = popupFullscreen.querySelector('.fullscreen__caption');
export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardTemplate = document
     .querySelector(this._cardSelector)
     .content
     .querySelector('.card')
     .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._elementImage = this._element.querySelector('.card__image');

    this._element.querySelector('.card__title').textContent = this._name;
    this._elementImage.src = this._link; 
    this._elementImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleRemoveCard();
    });  
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });
    
  }

  _handleLikeCard() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _handleRemoveCard() {
    this._element.remove();
  }

  _handleOpenPopup() {
    fullScreenImage.src = this._link;
    fullScreenCaption.textContent = this._name;
    fullScreenCaption.alt = this._name;
    openPopup(popupFullscreen);
  }
}  