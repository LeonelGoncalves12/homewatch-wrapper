export declare class HomewatchApi {
    auth: string;
    axios: any;
    homes: Homewatch.Homes;
    statistics: Homewatch.Statistics;
    conditions: Homewatch.Conditions;
    keys: Homewatch.Keys;
    settings: Homewatch.Settings;
    users: Homewatch.Users;
    hub: Homewatch.Hub;

    rooms(home: { id: number }): Homewatch.Rooms;

    constructor(url: string, cache?: boolean);

    scenarioThings(scenario: { id: number }): Homewatch.ScenarioThings;

    scenarioApplier(scenario: { id: number }): Homewatch.ScenarioApplier;

    scenarios(home: { id: number }): Homewatch.Scenarios;

    status(thing: { id: number }): Homewatch.ThingStatus;

    things(room: { id: number }): Homewatch.Things;

    timedTasks(home: { id: number }): Homewatch.TimedTasks;

    triggeredTasks(home: { id: number }): Homewatch.TriggeredTasks;

    discoverthings(home: { id: number }): Homewatch.DiscoverThings;

}

declare namespace Homewatch {
    class Homes {
        createHome(home: { name: string, tunnel: string, location: string }): Promise<any>;

        deleteHome(id: number): Promise<any>;

        getHome(id: number): Promise<any>;

        listHomes(): Promise<any>;

        updateHome(id: number, home: { name: string, tunnel: string, location: string }): Promise<any>;

        private constructor();
    }


    class Statistics {
        createStatistic(statistic: any): Promise<any>;
        deleteStatistic(id: number): Promise<any>;
        getStatistic(id: number): Promise<any>;
        listStatistics(): Promise<any>;
        updateStatistic(id: number): Promise<any>;
        private constructor();
    }

    class Settings {
        createSetting(setting: any): Promise<any>;
        deleteSetting(id: number): Promise<any>;
        getSetting(id: number): Promise<any>;
        listSettings(): Promise<any>;
        updateSetting(id: number, setting: any): Promise<any>;
        private constructor();
    }

    class Users {
        login(auth: { email: string, password: string }): Promise<any>;

        register(user: { name: string, email: string, password: string, password_confirmation: string }): Promise<any>;

        currentUser(): Promise<any>;

        updateCurrentUser(user: { name: string, email: string, password: string, password_confirmation: string,  city: string }): Promise<any>;

        private constructor();
    }

    class Conditions {
        createCondition(condition: { city: string, temperature: string, wind: string, humidity: string , sunrise: string , sunset: string , icon: string }): Promise<any>;

        deleteCondition(id: number): Promise<any>;

        getCondition(id: number): Promise<any>;

        listConditions(): Promise<any>;

        updateCondition(id: number, condition: any): Promise<any>;

        private constructor();
    }

    class Keys {

        getKey(id: any): Promise<any>;

        private constructor();
    }

    class Things {
        listThings(): Promise<any>;

        createThing(room: any): Promise<any>;

        updateThing(id: number, room: any): Promise<any>;

        deleteThing(id: number): Promise<any>;

        getThing(id: number): Promise<any>;

        discoverThings(discoveryParams: { type: string, subtype: string, port: number }): Promise<any>;

        private constructor();
    }

    class DiscoverThings {
        discoverThings(discoveryParams: { type: string, subtype: string, port: number }): Promise<any>;

        private constructor();
    }

    class Rooms {
        listRooms(): Promise<any>;

        createRoom(home: any): Promise<any>;

        updateRoom(id: number, home: any): Promise<any>;

        deleteRoom(id: number): Promise<any>;

        getRoom(id: number): Promise<any>;

        private constructor();
    }

    class ThingStatus {
        getStatus(): Promise<any>;

        putStatus(status: Object): Promise<any>;

        private constructor();
    }

    class Scenarios {
        createScenario(scenario: { name: string , icon: string }): Promise<any>;

        deleteScenario(id: number): Promise<any>;

        getScenario(id: number): Promise<any>;

        listScenarios(): Promise<any>;

        updateScenario(id: number, scenario: { name: string }): Promise<any>;

        private constructor();
    }

    class ScenarioThings {
        createScenarioThing(scenarioThing: { thing_id: number, status: any }): Promise<any>;

        deleteScenarioThing(id: number): Promise<any>;

        getScenarioThing(id: number): Promise<any>;

        listScenarioThings(): Promise<any>;

        updateScenarioThing(id: number, scenarioThing: { thing_id: number, status: any }): Promise<any>;

        private constructor();
    }

    class ScenarioApplier {
        applyScenario(): Promise<any>;

        private constructor();
    }

    class TimedTasks {
        createTimedTask(timedTask: { thing_id?: number, scenario_id?: number, status_to_apply: any, cron: string }): Promise<any>;

        deleteTimedTask(id: number): Promise<any>;

        getTimedTask(id: number): Promise<any>;

        listTimedTasks(): Promise<any>;

        updateTimedTask(id: number, timedTask: { thing_id?: number, scenario_id?: number, status_to_apply: any, cron: string }): Promise<any>;

        private constructor();
    }

    class TriggeredTasks {
        createTriggeredTask(triggeredTask: { thing_id?: number, scenario_id?: number, thing_to_compare_id: number, comparator: string, status_to_compare: any, status_to_apply: any ,display:any}): Promise<any>;

        deleteTriggeredTask(id: number): Promise<any>;

        getTriggeredTask(id: number): Promise<any>;

        listTriggeredTasks(): Promise<any>;

        updateTriggeredTask(id: number, triggeredTask: { thing_id?: number, scenario_id?: number, thing_to_compare_id: number, comparator: string, status_to_compare: any, status_to_apply: any ,display:any}): Promise<any>;

        private constructor();
    }

    class Hub {
        getTunnel(): Promise<any>;

        private constructor();
    }
}

