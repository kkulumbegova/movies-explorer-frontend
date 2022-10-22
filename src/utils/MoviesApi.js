class MoviesApi {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
    _handleResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Ошибка')
    }

    getItems() {
        return fetch(`${this.baseUrl}beatfilm-movies`, {
          method: 'GET',
        })
        .then(this._handleResponse);
      }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/' 
})

export default moviesApi;