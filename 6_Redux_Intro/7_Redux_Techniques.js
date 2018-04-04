//<script src="https://cdnjs.cloudflare.com/ajax/libs/expect/1.20.2/expect.js"></script>    in html
//<script src="https://wzrd.in/standalone/deep-freeze@latest"></script>    

const addCounter = (list) => {
    list.push(0);
    return list;
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
console.log('All tests passed.');