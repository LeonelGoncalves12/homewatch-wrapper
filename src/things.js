class Things {
  constructor(axios, room) {
    this.axios = axios;
    this.room = room;
  }

  /**
   * Returns the home's things
   * @return {Promise}
   */
  listThings() {
    return this.axios.get(`/rooms/${this.room.id}/things`);
  }

  /**
   * Discover devices in the user's network
   * @param {Object} discoveryParams
   * @param {string} discoveryParams.type
   * @param {string} discoveryParams.subtype
   * @param {number} discoveryParams.port
   * @return {Promise}
   */
  discoverThings(discoveryParams) {
    return this.axios.get(`/homes/${this.room.home.id}/things/discovery`, { params: discoveryParams });
  }

  /**
   * Gets a thing from a home
   * @param {number} id
   * @return {Promise}
   */
  getThing(id) {
    return this.axios.get(`/things/${id}`);
  }

  /**
    * Creates a thing
    * @param {Object} thing
    * @param {string} thing.type
    * @param {string} thing.subtype
    * @param {Object} thing.connection_info
    * @return {Promise}
    */
  createThing(thing) {
    return this.axios.post(`/rooms/${this.room.id}/things`, { thing });
  }

  /**
    * Updates a thing
    * @param {number} id
    * @param {Object} thing
    * @param {string} thing.type
    * @param {string} thing.subtype
    * @param {Object} thing.connection_info
    * @return {Promise}
    */
  updateThing(id, thing) {
    return this.axios.put(`/things/${id}`, { thing });
  }

  /**
    * Deletes a thing
    * @param {number} id
    * @return {Promise}
    */
  deleteThing(id) {
    return this.axios.delete(`/things/${id}`);
  }
}

module.exports = Things;
