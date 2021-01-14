// initiates bubble sort methods
const SelectionSortUtility = (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = SelectionSortAlgorithm(copyArr);
    SelectionSortAnimation(animateArr, speed);
}

const sort = (arr, animations) => { 
    let n = arr.length; 

    // One by one move boundary of unsorted subarray 
    for (let i = 0; i < n-1; i++) { 
        // Find the minimum element in unsorted array 
        let min_idx = i;
        for (let j = i+1; j < n; j++) {
            animations.push([j, j, true, false]) // highlight animation
            //animations.push([min_idx, j, true, false]) // highlight animation
            //animations.push([j, j, true, false]) // highlight animation
            if (arr[j].value < arr[min_idx].value) { 
               // animations.push([min_idx, min_idx, false, false]) // un-highlight animation
                min_idx = j;
            }
            animations.push([j, j, false, false]) // un-highlight animation
            //animations.push([min_idx, j, true, false]) // highlight animation
            //animations.push([min_idx, j, false, false]) // un-highlight animation
        }

        // Swap the found minimum element with the first 
        // element 
        animations.push([min_idx, i, true, false]) // highlight animation
        animations.push([min_idx, i, true, true]) // swap animation
        animations.push([min_idx, i, false, false]) // un-highlight animation
        let temp = arr[min_idx].value; 
        arr[min_idx].value = arr[i].value; 
        arr[i].value = temp; 
    } 
} 

// performs bubble sort on array
const SelectionSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    sort(arr, animations);
    return animations;
}

// performs bubble sort animation
const SelectionSortAnimation = (animateArr, speed) => {
    for (let i = 0; i < animateArr.length; i++) {
        (function(index) {
            setTimeout(function() {
                let blockArray = document.getElementsByClassName('block');
                let [curr, next, isCompare, isSwap] = animateArr[i];
                if (isCompare === true && isSwap === false) { // highlight animation
                    setTimeout(function() {
                        blockArray[curr].style.backgroundColor = 'red';
                        blockArray[next].style.backgroundColor = 'red';
                    }, index * speed);
                }
                else if (isCompare === false && isSwap === false) { // un-highlight animation
                    setTimeout(function() {
                        blockArray[curr].style.backgroundColor = '#282c34';
                        blockArray[next].style.backgroundColor = '#282c34';
                    }, index * speed);
                }
                else if (isCompare === true && isSwap === true) { // swap animation
                    setTimeout(function() {
                        let currHeight = blockArray[next].style.height;
                        let nextHeight = blockArray[curr].style.height;
                        blockArray[curr].style.height = currHeight;
                        blockArray[next].style.height = nextHeight;
                        blockArray[curr].style.height = currHeight+'px';
                        blockArray[next].style.height = nextHeight+'px';
                    }, index * speed);
                }
            }, (index) * speed);
        })(i)
    }
}

export default SelectionSortUtility;