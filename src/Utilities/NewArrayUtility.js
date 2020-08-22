import { v4 as uuidv4 } from 'uuid'; // unique key

const NewArrayUtility = (size, min, max) => {
    // populate new array
    let newArray = new Array(size);
    for(let i = 0; i < size; i++) {
        newArray[i] = {id: uuidv4(), value: Math.floor(Math.random() * (max - min + 1)) + min};
    }
    return newArray;
}

export default NewArrayUtility;