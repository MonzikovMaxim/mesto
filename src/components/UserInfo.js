export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this.setAvatar(data);
  }

  getInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    }
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }
}