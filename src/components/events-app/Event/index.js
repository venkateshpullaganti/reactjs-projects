
import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Event extends React.Component {
    @observable isEditEvent;
    constructor(props) {
        super(props);
        this.isEditEvent = false;
        console.log("event lo", props)
    }
    onDeleteEvent = (event) => {
        this.props.onRemoveEvent(event.target.id)
    }
    onEdit = () => {
        this.isEditEvent = true;
    }
    onChangeEventName = () => {

    }
    onChangeEventLocation = () => {

    }


    render() {
        const { name, location, id } = this.props.event;
        return (
            <form>
                <input type="text" disabled={this.isEditEvent} onChange={this.onChangeEventName} value={name} />
                <input type="text" disabled={this.isEditEvent} onChange={this.onChangeEventLocation} value={location} />
                <button type="button" onClick={this.onEdit}>Edit</button>
                <button id={id} type="button" onClick={this.onDeleteEvent}>Delete</button>
            </form>
        );
    }
}
export default Event;