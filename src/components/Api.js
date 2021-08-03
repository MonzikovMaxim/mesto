 export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _checkStatus= (res) => {
    if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkStatus(res));
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkStatus(res));
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
    })
  })
  .then((res) => this._checkStatus(res));
  }

  addNewCard(cardTitle, cardLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink
      })
    })
    .then((res) => this._checkStatus(res));
  }

  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,   
      'Content-Type': 'application/json',
      },
  })  
  .then((res) => this._checkStatus(res));
 }

 setLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => this._checkStatus(res));
}

deleteLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => this._checkStatus(res));
}

  changeAvatar(avatarLink) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      avatar: avatarLink
    })
  })  
  .then((res) => this._checkStatus(res));
  }
}

