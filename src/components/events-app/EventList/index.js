import React from "react";

import eventStore from "../../../stores/EventsStore";
import Event from "../Event";
import { observer } from "mobx-react";

@observer
class EventList extends React.Component {

    onRemoveEvent = (id) => {
        console.log(id);
    }
    renderEvents = () => {
        const events = eventStore.getEvents;
        console.log("render events", events);
        return events.map(currentEvent => <Event event={currentEvent} onRemoveEvent={this.onRemoveEvent} />)

    }
    render() {
        return (
            <div>
                {this.renderEvents()}
            </div>
        )
    }
}
export default EventList;