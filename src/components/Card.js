export default class Card {
  constructor({name, link, handleCardClick}, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

  }

  generateCard() {
      this._element = this._getTemplate(); 
      this._elementImage = this._element.querySelector('.card__image'); 
      this._elementImage.src = this._link;  
      this._elementImage.alt = this._name; 
      this._element.querySelector('.card__title').textContent = this._name; 
      this._setEventListeners(); 
      return this._element;
  }

  _handleLikeCard() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _handleRemoveCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeCard();
    })
    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleRemoveCard();
    })
  }
}  