import Popup from "./Popup.js";
import { config } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    const { formSelector } = config;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formSelector);
  }

  _getInputValues() {
    const { inputSelector } = config;
    this._inputList = this._form.querySelectorAll(inputSelector);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}