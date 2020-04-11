import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import eventStore from "../../../stores/EventsStore"

@observer
class AddEvent extends React.Component {
    @observable name
    @observable location
    constructor(props) {
        super(props);
        this.name = "";
        this.location = "";
    }

    onChangeName = (event) => {
        this.name = event.target.value;

    }
    onChangeLocation = (event) => {
        this.location = event.target.value;
    }
    onAddEvent = (event) => {
        event.preventDefault();

        if (this.name !== "" && this.location !== "") {
            eventStore.onAddEvent(this.name, this.location);
            this.name = "";
            this.location = "";
        }

    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.onChangeName} placeholder="EventName" value={this.name} />
                <input type="text" onChange={this.onChangeLocation} placeholder="Event Location" value={this.location} />
                <button type="button" onClick={this.onAddEvent}>Add Event</button>
            </form>
        );
    }
}
export default AddEvent;
