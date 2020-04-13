import { observable, action, computed } from "mobx";

import EventModel from "../Models/EventModel"

class EventsStore {

    @observable events
    constructor(props) {
        this.events = [];
    }

    @action.bound
    onAddEvent(name, location) {
        let eventObj = {
            id: new Date().getTime().toString(),
            name: name,
            location: location
        }
        const newEventModel = new EventModel(eventObj);
        this.events.push(newEventModel);

    }
    @action.bound
    deleteEvent(eventId) {
        this.events = this.events.filter(currentEvent => currentEvent.id !== eventId);
    }
    @computed
    get eventsCount() {
        return this.events.length;
    }
    @computed
    get getEvents() {
        return this.events;
    }

}
const eventStore = new EventsStore();
export default eventStore;