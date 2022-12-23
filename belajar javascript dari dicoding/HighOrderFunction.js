const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopThrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
})