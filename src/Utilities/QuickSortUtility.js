let numOfComparisons = 0;
let numOfSwaps = 0;
/* quick sort utility */

// set a timeout using a promise
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// initiates quick sort methods
const QuickSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = quickSortAlgorithm(copyArr);
    await quickSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];  
}

// performs quick sort on array
const quickSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    sort(arr, 0, length - 1, animations); 
    return animations;
}

// algorithm for quick sort
const sort = (arr, low, high, animations) => { 
    if (low < high) { 
        // pi is partitioning index
        let pi = partition(arr, low, high, animations); 
        // sort elements before partition and after partition 
        sort(arr, low, pi - 1, animations); 
        sort(arr, pi + 1, high, animations); 
    } 
} 

// sort partitioned array
const partition = (arr, low, high, animations)  => {
    let pivot = arr[high].value;  
    let i = (low-1);
    let isLess = false;
    // animations.push([high, high, false, true]) // highlight (NOTE: Uncomment if highlighting partition index is desired)
    for (let j = low; j < high; j++) { 
        animations.push([j, i+1, true, false]) // highlight animation
        numOfComparisons++;
        if (arr[j].value < pivot) { 
            numOfSwaps++;
            isLess = true;
            i++;
            // swap arr[i] and arr[j] 
            let temp = arr[i].value; 
            arr[i].value = arr[j].value; 
            arr[j].value = temp;
            animations.push([j, i, true, true]) // swap animation
        } 
        if (!isLess) {
            animations.push([j, i+1, false, false]) // un-highlight animation
        }
        else {
            animations.push([j, i, false, false]) // un-highlight animation
        }
    } 
    numOfSwaps++;
    /* animations.push([i+1, high, true, false]) // highlight animation (NOTE: Uncomment if highlighting swap is desired) */
    // swap arr[i+1] and arr[high] (or pivot) 
    let temp = arr[i+1].value; 
    arr[i+1].value = arr[high].value; 
    arr[high].value = temp;
    animations.push([i+1, high, true, true]) // swap animation
    animations.push([i+1, high, false, false]) // un-highlight animation
    /* animations.push([j, i+1, false, false]) // un-highlight animation (NOTE: Uncomment if highlighting swap is desired) */
    return i+1;
} 

// performs quick sort animation
const quickSortAnimation = async (animateArr, speed) => {
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

export default QuickSortUtility;