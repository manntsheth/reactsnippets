//<script src="https://cdnjs.cloudflare.com/ajax/libs/expect/1.20.2/expect.js"></script>    in html
//<script src="https://wzrd.in/standalone/deep-freeze@latest"></script>    

const addCounter = (list) => {
    return list.concat([0]);
    //or return [...list,0]; ES6 spread operator
    //do not use list.push(0);
}

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];
    deepFreeze(listBefore); //throws an error , because it does not allow modifying original array
    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
};

testAddCounter();

const removeCounter = (list, index) => {
    //DON'T USE THIS 
    //list.splice(index, 1);
    // return list;

    //USE THIS INSTEAD
    return list.slice(0, index).concat(list.slice(index+1));
    //OR in ES6 style
    //  return [
    //          ...list.slice(0, index), 
    //          ...list.slice(index+1)
    //      ];
};

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    deepFreeze(listBefore); //throws an error , because it does not allow modifying original array
    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testRemoveCounter();

const incrementCounter = (list, index) => {
    // DON'T USE THIS
    // list[index]++;
    // return list;


    //USE THIS INSTEAD
    return list
            .slice(0, index)
            .concat([list[index]+1])
            .concat(list.slice(index+1));

    //ES6
    // return [
    //     ...list.slice(0, index),
    //     list[index] + 1,
    //     ...list.slice(index + 1)
    // ];
}

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11,20];
    deepFreeze(listBefore); //throws an error , because it does not allow modifying original array
    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testIncrementCounter();


const toggleTodo = (todo) => {
    //DON'T USE
    // todo.completed = !todo.completed;
    // return todo;

    return Object.assign({}, todo, {
        completed: !todo.completed
    });

    //proposed for ES7
    // return Object.assign(
    //    ...todo, 
    //     completed: !todo.completed
    // );
};

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',    
        completed: true
    };
    deepFreeze(todoBefore); //throws an error , because it does not allow modifying original object
    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};
testToggleTodo();
console.log('All tests passed.');