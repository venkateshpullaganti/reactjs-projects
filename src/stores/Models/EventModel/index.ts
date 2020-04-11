import { observable, action } from "mobx";


class EventModel {
    @observable name
    @observable location
    id
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.location = event.location
    }
    @action.bound
    onUpdateEventDetails(newName, newLocation) {
        this.name = newName;
        this.location = newLocation;
    }
}
export default EventModel;