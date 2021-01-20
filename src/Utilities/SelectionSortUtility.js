let numOfComparisons = 0;
let numOfSwaps = 0;
/* selection sort utility */

// set a timeout using a promise
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// initiates selection sort methods
const SelectionSortUtility = async (stateArray, speed) => { 
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = selectionSortAlgorithm(copyArr);
    await selectionSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];
}

// performs selection sort on array
const selectionSortAlgorithm = (arr) => {
    let n = arr.length; 
    let animations = [];
    sort(arr, n, animations);
    return animations;
}

// algorithm for selection sort
const sort = (arr, n, animations) => {
    for (let i = 0; i < n - 1; i++) { 
        // find the minimum element in unsorted array 
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            animations.push([j, j, true, false]) // highlight animation
            numOfComparisons++;
            if (arr[j].value < arr[min_idx].value) { 
                min_idx = j;
            }
            animations.push([j, j, false, false]) // un-highlight animation
        }
        // swap the found minimum element with the first element 
        numOfSwaps++;
        /* animations.push([min_idx, i, true, false]) // highlight animation (NOTE: Uncomment if highlighting swap is desired) */
        animations.push([min_idx, i, true, true]) // swap animation
        animations.push([min_idx, i, false, false]) // un-highlight animation
        let temp = arr[min_idx].value; 
        arr[min_idx].value = arr[i].value; 
        arr[i].value = temp; 
    } 
} 

// performs selection sort animation
const selectionSortAnimation = async (animateArr, speed) => {
    var numC = { value: 0 };
    var numS = { value: 0 };
    for (let i = 0; i < animateArr.length; i++) { // perform animations
        _animate(animateArr, speed, i, numC, numS);
    }
    await wait(animateArr.length * speed * 2); // wait till all animations are done
}

// perform highlight, un-highlight, or swap animation
const _animate = (animateArr, speed, i, numC, numS) => {
    (function(index) {
        setTimeout(function() {
            let blockArray = document.getElementsByClassName('block');
            let [curr, next, isCompare, isSwap] = animateArr[i];
            if (isCompare === true && isSwap === false) { // highlight animation
                setTimeout(function() {
                    numC.value++;
                    document.getElementById("Comparisons").innerHTML = "" + numC.value;
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
                    numS.value++;
                    document.getElementById("Swaps").innerHTML = "" + numS.value;
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

export default SelectionSortUtility;