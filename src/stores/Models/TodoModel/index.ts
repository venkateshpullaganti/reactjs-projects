import { observable, action } from "mobx";


type TodoModelProps = {
    id: string,
    title: string,
    isCompleted: boolean
}


class TodoModel {

    id: string;
    @observable title: string;
    isCompleted: boolean;
    constructor(props: TodoModelProps) {
        this.id = props.id;
        this.title = props.title;
        this.isCompleted = props.isCompleted;
    }
    @action.bound
    updateTodoTitle(title: string): void {
        this.title = title;
    }
    @action.bound
    toggleIsChecked(): void {
        console.log(this.isCompleted);
        this.isCompleted = !this.isCompleted;
    }

}
export default TodoModel;