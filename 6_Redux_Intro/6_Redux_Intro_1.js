//https://jsbin.com

const counter = (state =0 , action) => {    //reducer is pure function
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const {createStore} = Redux;
const store = createStore(counter);

//code below when you click on the html preview screen increments the counter
store.dispatch({type:'INCREMENT'});

const render = () => {
    document.body.innerText = store.getState();
};
store.subscribe(render);
render();
document.addEventListener('click',()=>{
    store.dispatch({type: 'INCREMENT'})
});

//redux sample code structure
/* const createStore = (reducer) => {
    let state; 
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer( state, action);    //here you can see reducer is referred as a pure function
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l!== listener);
        };
    }

    dispatch({});   //it calls the reducer to define the initial state
    return { getState, dispatch, subscribe};
}; */