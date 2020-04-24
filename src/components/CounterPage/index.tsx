import React from "react";
import { observer } from "mobx-react";

import counter from "../../stores/CounterStore";
import {
    Btn,
    CounterRoot,
    Name,
    BtnContainer,
    Number,
} from "./StyledComponents.js";

// type Props = {
//   initialCount: number
// }

@observer
class CounterPage extends React.Component {
    // functionCalling

    onIncrement = (): void => {
        counter.onIncrement();
    };

    handleDecrement = (): void => {
        if (counter.count !== 0) {
            counter.onDecrement();
        }
    };
    onChangeNumber = (event): void => {
        //in hold :React.FormEvent<EventTarget>
        counter.onChangeNumber(event.target.value);
    };

    render() {
        return (
            <form>
                <CounterRoot>
                    <Name>Counter</Name>
                    <BtnContainer>
                        <Btn type="button" onClick={counter.onIncrement}>
                            +
                        </Btn>
                        <Number
                            type="number"
                            onChange={this.onChangeNumber}
                            value={counter.getCount()}
                        />
                        <Btn type="button" onClick={counter.onDecrement}>
                            -
                        </Btn>
                    </BtnContainer>
                </CounterRoot>
            </form>
        );
    }
}
export default CounterPage;

//  @observable seconds = 0;

//   timerId = setInterval(() => {
//     this.seconds++
//   }, 1000);

//   render() {
//     return (<p>Seconds Passed:{this.seconds}</p>)
//   }

// import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'

// import stores from '../../stores'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{counterStore.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     )
//   }
// }

// export default CounterPage
