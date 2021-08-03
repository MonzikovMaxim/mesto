import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
constructor({popupSelector, formSelector, handleFormSubmit}) {
    super(popupSelector);
    this._form = document.querySelector(formSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._form.querySelector('.popup__save-button');
  }
  
  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
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