export const state = () => ({
    todoList: []
})

export const mutations = {
    add : (state, text) => {
        state.todoList.push({
            text,
            done: false
        })
    },
    delete : (state, { todo }) => {
        state.todoList.splice(getTodoIndex(state, todo), 1)

        getTodoIndex : (state, todo) => {
            return state.todoList.indexOf(todo)
        }
    },
    toggle : (state, todo) => {
        todo.done = !todo.done
    }
}
