import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions/todo-action";

const mapStateToProps = (state) => (
    { todos: state.todoReducer }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;