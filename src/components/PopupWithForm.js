import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._form.querySelector('.popup__save-button');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }
  
  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

    renderLoading(isLoading) {
    isLoading ? this._submitButton.textContent = 'Cохранение..' : this._submitButton.textContent = 'Cохранить';
  }
}  