const axios = require("axios");
const Users = require("./users");
const Keys = require("./keys");
const Conditions = require("./conditions");
const Settings = require("./settings");
const Homes = require("./homes");
const Rooms =require("./rooms");
const Statistics =require("./statistics");
const Things = require("./things");
const ThingStatus = require("./thing_status");
const Scenarios = require("./scenarios");
const ScenarioThings = require("./scenario_things");
const ScenarioApplier = require("./scenario_applier");
const Hub = require("./hub");
const TimedTasks = require("./timed_tasks");
const TriggeredTasks = require("./triggered_tasks");
const DiscoverThings = require("./DiscoverThings");
const cache = require("memory-cache");

class HomewatchApi {
  constructor(url, cache) {
    this.axios = axios.create({
      baseURL: url,
    });

    if (cache === true) {
      this.axios.get = getFromCache(this.axios.get);
      this.axios.interceptors.response.use(cacheClear);
    }
  }

  set auth(auth) {
    Object.assign(this.axios.defaults, { headers: { authorization: `Bearer ${auth}` } });
  }

  /**
   * @return {Users}
   */
  get users() {
    return new Users(this.axios);
  }

  /**
   * @return {Homes}
   */
  get homes() {
    return new Homes(this.axios);
  }
  get statistics() {
    return new Statistics(this.axios);
  }
  get conditions() {
    return new Conditions(this.axios);
  }
  get settings() {
    return new Settings(this.axios);
  }

  get keys() {
    return new Keys(this.axios);
  }
  /**
   * Access the things module
   * @param {Object} room
   * @return {Things}
   */
  things(room) {
    return new Things(this.axios, room);
  }
  rooms(home) {
        return new Rooms(this.axios, home);
    }
  /**
   * Access the thing status module
   * @param {Object} thing
   * @return {Things}
   */
  status(thing) {
    return new ThingStatus(this.axios, thing);
  }

  /**
   * Access the scenarios module
   * @param {Object} home
   * @return {Scenarios}
   */
  scenarios(home) {
    return new Scenarios(this.axios, home);
  }

  

  /**
   * Access the scenario things module
   * @param {Object} scenario
   * @return {ScenarioThings}
   */
  scenarioThings(scenario) {
    return new ScenarioThings(this.axios, scenario);
  }

  /**
    * Access the scenario things module
    * @param {Object} scenario
    * @return {ScenarioThings}
    */
  scenarioApplier(scenario) {
    return new ScenarioApplier(this.axios, scenario);
  }

  /**
   * Access the timed tasks module
   * @param {Object} home
   * @return {ScenarioThings}
   */
  timedTasks(home) {
    return new TimedTasks(this.axios, home);
  }

  /**
   * Access the timed tasks module
   * @param {Object} home
   * @return {ScenarioThings}
   */
  triggeredTasks(home) {
    return new TriggeredTasks(this.axios, home);
  }
  DiscoverThings(home) {
        return new DiscoverThings(this.axios, home);
    }
    
  /**
   * Access the hub module
   * @return {Hub}
   */
  get hub() {
    let axiosInstance = axios.create({
      baseURL: "http://homewatch-hub.local:4567/",
      timeout: 1000,
    });
    return new Hub(axiosInstance);
  }
}

function getFromCache(get) {
  return function cachedGet(url) {
    const value = cache.get(url);

    if (value) {
      return value;
    } else {
      const request = get(...arguments);
      cache.put(url, request, 30000);
      return request;
    }
  };
}

function cacheClear(response) {
  if (response.config.method != "get") cache.clear();
  return response;
}

module.exports.HomewatchApi = HomewatchApi;
