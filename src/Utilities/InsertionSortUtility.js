let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// initiates insertion sort methods
const InsertionSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = InsertionSortAlgorithm(copyArr);
    await InsertionSortAnimation(animateArr, speed);
}

// performs insertion sort on array
const InsertionSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    for (let i = 1; i < length; i++) {
        let j = i;
        if (arr[j].value >= arr[j-1].value) {
            animations.push([j-1, i, true, false]); // highlight animation
            animations.push([j-1, i, false, false]) // un-highlight animation
        }
        else {
            while (j > 0 && arr[j].value < arr[j-1].value) {
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
    for (let i = 0; i < animateArr.length; i++) {
        console.log(animateArr[i]);
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
    await wait(animateArr.length * speed * 2);
}

export default InsertionSortUtility;