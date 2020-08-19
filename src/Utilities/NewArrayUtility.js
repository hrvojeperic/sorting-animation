const NewArrayUtility = (size, min, max) => {
    // populate new array
    let newArray = new Array(size);
    for(let i = 0; i < size; i++) {
        newArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("Creating New Array..." + newArray[0]);
    return newArray;
}

export default NewArrayUtility;