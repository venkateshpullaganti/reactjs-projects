import React from "react";
import { observer } from "mobx-react";

import AddEvent from "./AddEvent";
import EventList from "./EventList";
import eventStore from "../../stores/EventsStore";


@observer
class EventsApp extends React.Component {


    render() {
        return (
            <div style={{ padding: "100px" }}>
                <AddEvent />
                <h3>Number of Events : {eventStore.eventsCount}</h3>
                <EventList />
            </div>
        );
    }

}
export default EventsApp;