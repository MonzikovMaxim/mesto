export default class Popup {
  constructor(popupSelector, formSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = document.querySelector(formSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
   this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn = this._popup.querySelector('.popup__close-button');
    this._closeBtn.addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
  }
}