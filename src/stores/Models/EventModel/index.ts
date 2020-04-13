import { observable, action } from "mobx";


class EventModel {
    @observable name: string
    @observable location: string
    id: string
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