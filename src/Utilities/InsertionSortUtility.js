let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let numOfComparisons = 0;
let numOfSwaps = 0;
// initiates insertion sort methods
const InsertionSortUtility = async (stateArray, speed) => {

    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = InsertionSortAlgorithm(copyArr);
    await InsertionSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];  
}

// performs insertion sort on array
const InsertionSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    for (let i = 1; i < length; i++) {
        let j = i;
        numOfComparisons++;
        animations.push([j-1, j, true, false]); // highlight animation
        animations.push([j-1, j, false, false]) // un-highlight animation
        if (arr[j].value >= arr[j-1].value) {
            //animations.push([j-1, i, true, false]); // highlight animation
            //animations.push([j-1, i, false, false]) // un-highlight animation
        }
        else {
            while (j > 0 && arr[j].value < arr[j-1].value) {
                numOfComparisons++;
                numOfSwaps++;
                animations.push([j-1, j, true, false]) // highlight animation
                animations.push([j-1, j, true, true]) // swap animation
                let temp = arr[j].value;
                arr[j].value = arr[j-1].value;
                arr[j-1].value = temp;
                animations.push([j-1, j, false, false]) // un-highlight animation
                j = j - 1;
            }
        }
    }
    return animations;
}

// performs insertion sort animation
const InsertionSortAnimation = async (animateArr, speed) => {
    var numC = { value: 0 };
    var numS = { value: 0 };
    for (let i = 0; i < animateArr.length; i++) {
        animate(animateArr, speed, i, numC, numS);
        /*(function(index) {
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
        })(i)*/
    }
    await wait(animateArr.length * speed * 2);
}

const animate = (animateArr, speed, i, numC, numS) => {
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

export default InsertionSortUtility;