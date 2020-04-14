import { observable, action } from "mobx";

export type eventObj = {
    id: string,
    name: string,
    location: string
}

class EventModel {
    id: string
    @observable name: string
    @observable location: string

    constructor(event: eventObj) {
        this.id = event.id;
        this.name = event.name;
        this.location = event.location
    }
    @action.bound
    onUpdateEventDetails(newName: string, newLocation: string) {
        this.name = newName;
        this.location = newLocation;
    }
}
export default EventModel;