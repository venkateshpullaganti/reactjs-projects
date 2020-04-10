import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import eventStore from "../../../stores/EventsStore"

@observer
class AddEvent extends React.Component {
    @observable name
    @observable location

    onChangeName = (event) => {
        this.name = event.target.value;
    }
    onChangeLocation = (event) => {
        this.location = event.target.value
    }
    onAddEvent = () => {
        console.log(this.name, this.location);
        eventStore.onAddEvent(this.name, this.location);
    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.onChangeName} placeholder="Enter Event Name..." />
                <input type="text" onChange={this.onChangeLocation} placeholder="Enter Event Location..." />
                <button type="button" onClick={this.onAddEvent}>Add Event</button>
            </form>
        );
    }
}
export default AddEvent;
