import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

type timerCompType = {
    level: number
}

@observer
class TimerComponent extends React.Component<timerCompType> {
    @observable remainingTime: number;

    initialHiddenCells = 3;
    constructor(props) {
        super(props);
        this.remainingTime = (props.level + this.initialHiddenCells) * 2;
    }
    updateRemainingTime = () => {
        this.remainingTime = (this.props.level + this.initialHiddenCells) * 2;
    }
    timerID = setInterval(
        () => {
            this.remainingTime--;
            if (this.remainingTime === -1) this.updateRemainingTime();
        },
        1000
    );
    componentWillMount() {
        this.updateRemainingTime();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>Remaining Time: {this.remainingTime + 'sec'}</div>
        );
    }
}
export default TimerComponent;