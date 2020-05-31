class Conditions {
  constructor(axios) {
      this.axios = axios;
  }

  /**
   * Returns the user's home
   * @return {Promise}
   */
  listConditions() {
      return this.axios.get("/conditions");
  }

  /**
   * Gets a home
   * @param {number} id
   * @return {Promise}
   */
  getCondition(id) {
      return this.axios.get(`/condition/${id}`);
  }

  /**
   * Creates a home
   * @param {Object} home
   * @param {string} home.name
   * @param {string} home.tunnel
   * @param {string} home.location
   * @return {Promise}
   */
  createCondition(condition) {
      return this.axios.post("/conditions", { condition });
  }

  /**
   * Creates a home
   * @param {number} id
   * @param {Object} home
   * @param {string} home.name
   * @param {string} home.tunnel
   * @param {string} home.location
   * @return {Promise}
   */
  updateCondition(id, condition) {
      return this.axios.put(`/conditions/${id}`, { condition });
  }

  /**
   *  Deletes a home
   *  @param {number} id
   *  @return {Promise}
   */
  deleteCondition(id) {
      return this.axios.delete(`/conditions/${id}`);
  }
}

module.exports = Conditions;