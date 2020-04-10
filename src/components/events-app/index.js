import React from "react";

import AddEvent from "./AddEvent";
import EventList from "./EventList";
import { observer } from "mobx-react";
@observer
class EventsApp extends React.Component {


    render() {
        return (
            <div>
                <AddEvent />
                <EventList />
            </div>
        );
    }

}
export default EventsApp;
