
import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import eventStore from "../../../stores/EventsStore"

@observer
class Event extends React.Component {
    @observable isEditEvent;
    @observable name
    @observable location

    constructor(props) {
        super(props);
        const { name, location } = this.props.event;
        this.isEditEvent = false;
        this.name = name;
        this.location = location;
    }
    onDeleteEvent = (event) => {
        eventStore.deleteEvent(event.target.id)
    }
    onEdit = () => {
        this.isEditEvent = true;
    }
    onChangeEventName = (event) => {
        this.name = event.target.value;
    }
    onChangeEventLocation = (event) => {
        this.location = event.target.value;
    }
    onUpdateEvent = () => {
        this.props.event.onUpdateEventDetails(this.name, this.location);
        this.isEditEvent = false;
    }
    renderEvent = () => {
        const { id } = this.props.event;
        if (this.isEditEvent === true) {
            return (
                <form>
                    <input id="name" type="text" onChange={this.onChangeEventName} value={this.name} />
                    <input id="location" type="text" onChange={this.onChangeEventLocation} value={this.location} />
                    <button id={id} type="button" onClick={this.onUpdateEvent}>Update Event</button>
                </form>
            )
        }
        else {

            return (
                <form>
                    <p>Event Name:{this.name} </p>
                    <p>Event Location:{this.location} </p>
                    <button type="button" onClick={this.onEdit}>Edit</button>
                    <button id={id} type="button" onClick={this.onDeleteEvent}>Delete</button>
                </form>
            )
        }
    }


    render() {

        return (
            <div>
                {this.renderEvent()}
            </div>
        );
    }
}
export default Event;
