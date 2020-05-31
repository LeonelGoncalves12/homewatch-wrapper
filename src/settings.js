class Settings {
  constructor(axios) {
        this.axios = axios;
    }


  listSettings() {
    return this.axios.get("/settings");
  }


  getSetting(id) {
    return this.axios.get(`/settings/${id}`);
  }

  createSetting(setting) {
    return this.axios.post("/settings", { setting });
  }


  updateSetting(id, setting) {
    return this.axios.put(`/settings/${id}`, { setting });
  }


  deleteSetting(id) {
    return this.axios.delete(`/settings/${id}`);
  }
}

module.exports = Settings;
