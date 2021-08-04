import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form');
    this._handleSubmit = null;
  }
  setFormSubmit(handler) {
    this._handleSubmit = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
  }
}