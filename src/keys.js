class Keys {
  constructor(axios) {
      this.axios = axios;
  }

  getKey(id) {
      return this.axios.get(`/keys/${id}`);
  }

}

module.exports = Keys;
