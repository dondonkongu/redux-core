const initialState = {
    todos: [
        { id: 1, title: 'Learn React' },
        { id: 2, title: 'Learn Redux' },
        { id: 3, title: 'Learn React Native' }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos:[...state.todos,{id:state.todos.length+1, title: action.payload}]
            }
        case 'DELETE_TODO':
            return {
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'CLEAR_TODOS':
            return {
                todos:[]
            }
        default:
            return state;    
    }
}

export default todoReducer;