class Weathers {
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * Returns the user's home
     * @return {Promise}
     */
    listWeathers() {
        return this.axios.get("/weathers");
    }

    /**
     * Gets a home
     * @param {number} id
     * @return {Promise}
     */
    getWeather(id) {
        return this.axios.get(`/weather/${id}`);
    }

    /*
     * Creates a home
     * @param {Object} home
     * @param {string} home.name
     * @param {string} home.tunnel
     * @param {string} home.location
     * @return {Promise}
     */
    createWeather(weather) {
        return this.axios.post("/weathers", { weather });
    }

    /*
     * Creates a home
     * @param {number} id
     * @param {Object} home
     * @param {string} home.name
     * @param {string} home.tunnel
     * @param {string} home.location
     * @return {Promise}
     */
    updateWeather(id, weather) {
        return this.axios.put(`/weathers/${id}`, { weather });
    }

    /**
     *  Deletes a home
     *  @param {number} id
     *  @return {Promise}
     */
    deleteWeather(id) {
        return this.axios.delete(`/weathers/${id}`);
    }
}

module.exports = Weathers;
