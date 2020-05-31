class DiscoverThings {
    constructor(axios, home) {
        this.axios = axios;
        this.home = home;
    }
    discoverThings(discoveryParams) {
        return this.axios.get(`/homes/${this.home.id}/things/discovery`, { params: discoveryParams });
    }
}
module.exports = DiscoverThings;
