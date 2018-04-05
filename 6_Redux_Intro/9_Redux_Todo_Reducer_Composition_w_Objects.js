const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !todo.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action)=> {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

//todoapp is having two reducers combined ('visibilityfilter', and 'todos' reducers)
//point is both reducers' logic are independent, so different developers can use it independently 

// const todoApp = (state= {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     };
// };

//following function combineReducers works same as commented code above
const {combineReducers} = Redux;
// const todoApp = combineReducers({
//     todos: todos,
//     visibilityFilter: visibilityFilter
// });
//ES6 style below
const todoApp = combineReducers({todos, visibilityFilter});

//Implementation of combineReducers inside library
//Here reducers input is a json object 
// reducers = {
//     todos: todos, 
//     visibilityFilter: visibilityFilter
// }
//---Implementation below----
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce((nextState, key) => {   // here nextState is accumulator which starts as {}, and ends as all reducers name as a key and reducer function definition as a value
//             nextState[key] = reducers[key](state[key], action);
//             return nextState;
//         },{});
//     };
// };
//Here the function is taking functions as input, and also giving back functions as output
//const todoApp = combineReducers({ todos, visibilityFilter });
//---Implementation ends---


const {createStore} = Redux;
const store = createStore(todoApp);

console.log('Initial State');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current State');
console.log(store.getState());
console.log('-------------');


console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Reading'
});
console.log('Current State');
console.log(store.getState());
console.log('-------------');


console.log('Dispatching TOGGLE_TODO');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log('Current State');
console.log(store.getState());
console.log('-------------');


console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW COMPLETED FALSE',
    id: 0
});
console.log('Current State');
console.log(store.getState());
console.log('-------------');