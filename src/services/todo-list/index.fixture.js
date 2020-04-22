import todos from "../../fixtures/todo-list/getTodoListResponse.json";

class TodoFixtureService {
    getTodos = () => {
        return new Promise((resolve, reject) => resolve(todos));
    };
}
export default TodoFixtureService;
