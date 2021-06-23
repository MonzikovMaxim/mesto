import Popup from './Popup.js';
import { fullScreenImage, fullScreenCaption } from '../utils/constants.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    fullScreenImage.src = link;
    fullScreenCaption.textContent = name;
    fullScreenCaption.alt = name;
  }
}