import React from "react";
import { observer } from "mobx-react";

interface footerProps {
    setCurrentFilter: (filter: string) => void;
    clearCompleted: () => void;
    activeTodoCount: number;
}

@observer
class TodoFooter extends React.Component<footerProps> {
    onChangeCurrentFilter = (filter: string) => {
        this.props.setCurrentFilter(filter);
    };
    clearCompleted = () => {
        this.props.clearCompleted();
    };
    render() {
        const { activeTodoCount } = this.props;
        return (
            <div className="extra-functions">
                <p>Remaining Todos: {activeTodoCount}</p>
                <button
                    className="all-btn"
                    onClick={() => this.onChangeCurrentFilter("All")}
                >
                    All
                </button>
                <button
                    className="active-btn"
                    onClick={() => this.onChangeCurrentFilter("Active")}
                >
                    Active
                </button>
                <button
                    className="completed-btn"
                    onClick={() => this.onChangeCurrentFilter("Completed")}
                >
                    Completed
                </button>
                <button
                    className="cleat-completed-btn"
                    onClick={this.clearCompleted}
                >
                    Clear Completed
                </button>
            </div>
        );
    }
}
export default TodoFooter;

// autorun(() => {
//     if (themeStore.activeTodoCount === 0) {
//         console.log("autorun");
//         alert("congrats you have no todos left..!");
//     }
//     else {
//         console.log("autorun else")
//     }
// }
// )

// function compl() {
//     return todoStore.todoLength === 0;
// }

// const reaction1 = reaction(
//     () => todoStore.todoLength,
//     (length) => alert("completed")
// )
