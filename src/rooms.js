class Rooms {
    constructor(axios, home) {
        this.axios = axios;
        this.home = home;
    }

    /**
     * Returns the home's room
     * @return {Promise}
     */
    listRooms() {
        return this.axios.get(`/homes/${this.home.id}/rooms`);
    }


    /**
     * Gets a room from a home
     * @param {number} id
     * @return {Promise}
     */
    getRoom(id) {
        return this.axios.get(`/rooms/${id}`);
    }


    /**
     * Creates a room
     * @param {Object} room
     * @param {string} room.name
     * @return {Promise}
     */
    createRoom(room) {
        return this.axios.post(`/homes/${this.home.id}/rooms`, { room });
    }

    /**
     * Updates a room
     * @param {number} id
     * @param {Object} room
     * @param {string} room.name
     * @return {Promise}
     */
    updateRoom(id, room) {
        return this.axios.put(`/rooms/${id}`, { room });
    }

    /**
     * Deletes a room
     * @param {number} id
     * @return {Promise}
     */
    deleteRoom(id) {
        return this.axios.delete(`/rooms/${id}`);
    }
}

module.exports = Rooms;
