import { observable, action } from "mobx";


class Counter {
    @observable count: number = 0;

    incrementor: number = 1;
    decrementor: number = -1;

    getCount = () => {
        return this.count;
    }

    @action.bound
    onChangeNumber = (input) => {
        this.count = input;
    }

    @action.bound
    onIncrement = () => {
        this.count = Number(this.count) + this.incrementor;
        // this.count++;
    }

    @action.bound
    onDecrement = () => {
        this.count = Number(this.count) + this.decrementor;
        // this.count--;
    }

}
const counter = new Counter();
export default counter;