import { observable, action } from "mobx";
// import { observer } from "mobx-react";

class TodoModel {

    id
    @observable title
    @observable isCompleted
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.isCompleted = false;
    }
    @action.bound
    updateTodoTitle(title) {
        this.title = title;
    }
    @action.bound
    toggleIsChecked() {
        this.isCompleted = !this.isCompleted;
    }

}
export default TodoModel;