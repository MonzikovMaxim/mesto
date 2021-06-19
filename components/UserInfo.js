import { profileName, profileJob } from '../utils/constants.js';

export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    this._name.value = profileName.textContent;
    this._job.value = profileJob.textContent;
  }

  setUserInfo() {
    profileName.textContent = this._name.value;
    profileJob.textContent = this._job.value;
  }
}