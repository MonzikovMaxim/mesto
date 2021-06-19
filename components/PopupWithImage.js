import Popup from './Popup.js';
import { fullScreenImage, fullScreenCaption } from '../utils/constants.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(image, caption) {
    super.open();
    fullScreenImage.src = image;
    fullScreenCaption.textContent = caption;
    fullScreenCaption.alt = caption;
  }
}