export default class Card {
  constructor({data, ownerId, handleCardClick, handleDeleteCardClick, handleClickLike, handleDeleteLike, cardSelector}) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._dataOwnerId = data.owner._id; //айди добавившего карточку
    this._ownerId = ownerId; // мой айди
    this._likesArray = data.likes; // массив со всеми лайками
    this._cardLikes = data.likes.length // кол-во лайков на карточке
    this._dataId = data._id;
    this._handleClickLike = handleClickLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._cardSelector = cardSelector;
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
      this._likeButton = this._element.querySelector('.card__like-button');
      this._likeCounter = this._element.querySelector('.card__like-counter');
      this._element.querySelector('.card__title').textContent = this._name; 
      this._setEventListeners(); 
      this.showLikes(this._cardLikes)
      const myLike = this._likesArray.some((item) => item._id === this._ownerId);
      if (myLike) {
        this.pressLike()
      } else {
        this.deleteLike()
      }

      this._getVisible();
     
      return this._element;  
  }

  _getVisible() {
    if (this._dataOwnerId === this._ownerId) {
      this._element.querySelector('.card__trash-button').classList.add('card__trash-button_visible');
    }
  }

  handleRemoveCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    this._likeButton.addEventListener('click', () => {
      this._updateLikes();
    })
    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleDeleteCardClick();
    })
  }
    
  pressLike() {
    this._likeButton.classList.add('card__like-button_active');
  }

  deleteLike() {
    this._likeButton.classList.remove('card__like-button_active');
  }

  showLikes(number) {
      this._likeCounter.textContent = number;
  }

    _updateLikes() {
      if (this._likeButton.classList.contains('card__like-button_active')) {
        this.deleteLike()
        this._handleDeleteLike(this._dataId)
      } else {
        this.pressLike()
        this._handleClickLike(this._dataId)
      }
    }
 }
 