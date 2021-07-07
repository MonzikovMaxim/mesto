export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _checkPromise(res) {
    if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

  getInitialCards() {
    return fetch(`${this_.url}/cards`, {
      headers: {
        authorization: 'this._token',
      },
    })
    .then(this._checkPromise());
  }
  
  getUserInfo() {
    return fetch(`${this_.url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: 'this._token',
      },
    })
    .then(this._checkPromise());
  }

  setUserInfo(data) {
    return fetch(`${this_.url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        job: data.job
    })
  })
    .then(this._checkPromise());
  }

  addNewCard(cardTitle, cardLink) {
    return fetch(`${this_.url}/cards`, {
      method: 'POST',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink
      })
    })
    .then(this._checkPromise());
  }

  deleteCard() {
    return fetch(`${this_.url}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
    },
  })  
    .then(this._checkPromise());
 }

  setLike() {
    return fetch(`${this_.url}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
    },
  })  
    .then(this._checkPromise());
  }

  deleteLike() {
    return fetch(`${this_.url}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
    },
  })  
    .then(this._checkPromise());
  }

  changeAvatar(data) {
    return fetch(`${this_.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: 'this._token',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.avatar
    })
  })  
    .then(this._checkPromise());
  }
}
