export const state = () => ({
    todoList: []
})

export const mutations = {
    add: (state, text) => {
        state.todoList.push({
            text,
            done: false
        })
    },
    delete: (state, todo) => {
        state.todoList.splice(local.getTodoIndex(state, todo), 1)
    },
    deleteAll: (state) => {
        state.todoList = []
    },
    toggle: (state, todo) => {
        todo.done = !todo.done
    }
}

const local = {
    getTodoIndex: (state, todo) => {
        return state.todoList.indexOf(todo)
    }
}
