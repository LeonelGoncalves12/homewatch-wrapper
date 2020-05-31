class Statistics {
  constructor(axios) {
        this.axios = axios;
    }

  listStatistics() {
    return this.axios.get("/statistics");
  }

  getStatistic(id) {
    return this.axios.get(`/statistics/${id}`);
  }

  createStatistic(statistic) {
    return this.axios.post("/statistics", { statistic });
  }

  updateStatistic(id, statistic) {
    return this.axios.put(`/statistics/${id}`, { statistic });
  }


  deleteStatistic(id) {
    return this.axios.delete(`/statistics/${id}`);
  }
}

module.exports = Statistics;
