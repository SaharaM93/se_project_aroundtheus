export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._profileTitle = document.querySelector(nameSelector);
    this._profileDescription = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._profileTitle.textContent,
      description: this._profileDescription.textContent,
    };
  }

  setUserInfo(newData) {
    this._profileTitle.textContent = newData.name;
    this._profileDescription.textContent = newData.description;
  }
}
