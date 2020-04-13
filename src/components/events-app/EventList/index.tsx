import React from "react";
import { observer } from "mobx-react";

import eventStore from "../../../stores/EventsStore";
import Event from "../Event";

// type EventListProps = {
//     onRemoveEvent: Function
// }

@observer
class EventList extends React.Component {

    onRemoveEvent = (id) => {
        console.log(id);
    }
    renderEvents = () => {
        const events = eventStore.getEvents;
        console.log("render events", events);
        return events.map(currentEvent => <Event key={currentEvent.id} event={currentEvent} onRemoveEvent={this.onRemoveEvent} />)

    }
    render() {
        console.log("event list");
        return (
            <div>
                {this.renderEvents()}
            </div>
        )
    }
}
export default EventList;